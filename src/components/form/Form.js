import React, { useCallback, useEffect, useState } from "react";
import { ContactForm, Error, FormField } from "./Form.styles";
import { v4 as uuidv4 } from "uuid";
import { useAsyncFn } from "../../hooks/useAsync";
import { sendMessage } from "../../services/contact.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  Option,
  SelectWrapper,
} from "../../pages/admin/client-deatils/ClientDetails.styles";
import { hideNewDocModel } from "../../features/documents/documentSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../../features/customers/customerSlice";
import { notification } from "../notifay/Notify";
import axios from "axios";

const options = [
  { value: "new", label: "New" },
  { value: "not_answered", label: "Not answered" },
  { value: "deal", label: "Deal" },
  { value: "call_back", label: "Call back" },
  { value: "not_relevant", label: "Not relevant" },
  { value: "wrong_number", label: "Wrong number" },
  { value: "hebrew", label: "Hebrew" },
  { value: "russian", label: "Russian" },
  { value: "arabic", label: "Arabic" },
];

export const Form = ({ isAdmin = false }) => {
  const dispatch = useDispatch();
  const sendMessageFn = useAsyncFn(sendMessage);
  const documentId = uuidv4();
  const collectionName = "customers";
  const [caseNumber, setCaseNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const { customers } = useSelector((store) => store.customer);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      ...(isAdmin ? { note: "", status: "" } : {}), // Add note and status fields for admin
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email("Invalid Email"),
      phone: Yup.string()
        .matches(/^(05\d{8})$/, "Invalid phone number")
        .required("Phone is required"),
      ...(isAdmin
        ? {
            note: Yup.string().required("Note is required"),
            customerStatus: Yup.string().required("Status is required"),
          }
        : {}), // Add validation for note and status fields for admin
    }),

    onSubmit: onSendMessage,
  });

  function incrementWithLeadingZeros(inputString) {
    const number = parseInt(inputString, 10) + 1;
    const paddedNumber = String(number).padStart(inputString.length, "0");
    setCaseNumber(paddedNumber);
  }

  const getCustomers = useCallback(async () => {
    const usersCollectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(
      query(usersCollectionRef, orderBy("createdAt", "desc"))
    );

    const users = [];
    querySnapshot.forEach((doc) => {
      // Access individual document data
      const user = doc.data();

      users.push(user);
    });

    const updatedCaseNumber = incrementWithLeadingZeros(
      users[0]?.caseNumber ? users[0].caseNumber : "2081235"
    );

    if (users.caseNumber) {
      users[0].caseNumber = updatedCaseNumber;
    }
    return users;
  }, []);

  const postData = async (data) => {
    const { email, name, phone } = data;
    const nameArray = name.split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray.slice(1).join(" ");

    const response = await axios.post(
      "/api/crm/v3/objects/contacts",
      {
        properties: {
          email: email,
          firstname: firstName,
          lastname: lastName,
          phone: phone,
          hs_lead_status: "NEW",
        },
      },
      {
        headers: {
          Authorization: `Bearer pat-eu1-c1033bc8-6135-4a46-bc10-2e3868d115db`,
        },
      }
    );
  };

  function onSendMessage() {
    sendMessageFn.execute(formik.values).then(() => {
      const documentRef = doc(db, collectionName, documentId);
      const data = {
        id: uuidv4(),
        name: formik.values.name,
        phone: formik.values.phone,
        email: formik.values.email,
        createdAt: isAdmin ? new Date() : serverTimestamp(),
        caseNumber: caseNumber,
        customerStatus: isAdmin ? selectedValue : "new",
        note: isAdmin ? formik.values.note : "",
      };

      setDoc(documentRef, data)
        .then(() => {
          console.log("Data successfully written to Firestore");

          if (isAdmin) {
            notification("admin_added");
          } else {
            notification("added");
          }

          setCaseNumber((prevCaseNumber) =>
            prevCaseNumber
              ? incrementWithLeadingZeros(prevCaseNumber)
              : "000000"
          ); // Increment caseNumber state

          if (isAdmin) {
            dispatch(addCustomer(data));
            dispatch(hideNewDocModel());
          }
        })
        .catch((error) => {
          console.error("Error writing data to Firestore: ", error);
        });

      postData(data);
    });

    formik.resetForm();
    setCaseNumber("");
    setSelectedValue("");
  }

  const SelectComponent = ({ options, value, onChange }) => (
    <SelectWrapper
      value={value}
      defaultValue={selectedValue}
      onChange={onChange}
      name="customerStatus"
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectWrapper>
  );

  const handleSelectChange = async (event) => {
    const isCustomerExist = customers.some(
      (customer) => customer.id === formik.values.id
    );

    if (!isCustomerExist) {
      formik.handleChange(event);
      setSelectedValue(event.target.value);
    }
  };

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <ContactForm onSubmit={formik.handleSubmit}>
      <FormField>
        <input
          type="text"
          placeholder="שם"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </FormField>
      {formik.errors.name && <Error>{formik.errors.name}</Error>}
      <FormField>
        <input
          type="text"
          placeholder="אימייל (לא חובה)"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </FormField>
      {formik.errors.email && <Error>{formik.errors.email}</Error>}
      <FormField>
        <input
          type="text"
          placeholder="טלפון"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </FormField>
      {formik.errors.phone && <Error>{formik.errors.phone}</Error>}
      {isAdmin && (
        <>
          <FormField>
            <SelectComponent options={options} onChange={handleSelectChange} />
          </FormField>

          {formik.errors.customerStatus && (
            <Error>{formik.errors.customerStatus}</Error>
          )}
          <FormField>
            <input
              type="text"
              placeholder="הערות"
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
            />
          </FormField>
          {formik.errors.note && <Error>{formik.errors.note}</Error>}
        </>
      )}
      <FormField>
        <button type="submit">
          {sendMessageFn.loading ? "בשליחה" : "שלח"}
        </button>
      </FormField>
      {sendMessageFn.error && <Error>{sendMessageFn.error}</Error>}
    </ContactForm>
  );
};
