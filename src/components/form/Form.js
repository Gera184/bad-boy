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
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  Option,
  SelectWrapper,
} from "../../pages/customer/Document/Document.styles";
import { hideNewDocModel } from "../../features/documents/documentSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomer,
  updateSelectedCustomer,
} from "../../features/customers/customerSlice";

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
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
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
    const length = inputString.length;
    let number = parseInt(inputString, 10) + 1;

    // Using string interpolation to concatenate the leading zeros and the incremented number
    const result = `${"0".repeat(length - String(number).length)}${number}`;

    setCaseNumber(result);
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
      users[0]?.caseNumber ? users[0].caseNumber : "000000"
    );

    if (users.caseNumber) {
      users[0].caseNumber = updatedCaseNumber;
    }
    return users;
  }, []);

  function onSendMessage() {
    sendMessageFn.execute(formik.values).then(() => {
      const documentRef = doc(db, collectionName, documentId);
      debugger;
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

          alert("נחזור אלייך בהקדם האפשרי");

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
          placeholder="אימייל"
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
