import React, { useEffect, useState } from "react";
import {
  Content,
  DocumentContainer,
  DocumentsList,
  FilterHeading,
  FilterWrapper,
  TextArea,
  TextAreaWrapper,
} from "./ClientDetails.styles";
import AddClient from "../add-client/AddClient";
import ClientDetails from "../client-deatils/ClientDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCustomer } from "../../../redux/customers/customerSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

function ClientDetailsWrapper() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [textValue, setTextValue] = useState("");
  const { customers } = useSelector((store) => store.customer);
  const selectedCustomer = customers.find((customerId) => customerId.id === id);
  const { newDocModel } = useSelector((store) => store.document);

  const handleTextareaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleTextareaChangeSave = async () => {
    const documentId = selectedCustomer.docId;
    const fieldName = "note";

    try {
      const documentRef = doc(db, "customers", documentId);
      const updatedCustomers = customers.map((customer) =>
        customer.id === selectedCustomer.id
          ? { ...customer, note: textValue }
          : customer
      );

      dispatch(updateSelectedCustomer(updatedCustomers)); // Update Redux state
      setTextValue("");

      await updateDoc(documentRef, {
        [fieldName]: textValue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = async (event) => {
    const selectedValue = event.target.value;
    const documentId = selectedCustomer.docId;
    const fieldName = "customerStatus";
    try {
      const documentRef = doc(db, "customers", documentId);

      const updatedCustomers = customers.map((customer) =>
        customer.id === selectedCustomer.id
          ? { ...customer, customerStatus: selectedValue }
          : customer
      );

      dispatch(updateSelectedCustomer(updatedCustomers)); // Update Redux state

      // Update the specific field in Firestore document
      await updateDoc(documentRef, {
        [fieldName]: selectedValue,
      });

      console.log("Field updated successfully!");
    } catch (error) {
      console.error("Error updating field:", error);
    }
  };

  useEffect(() => {
    // Set the default value based on the user
    if (selectedCustomer) {
      setTextValue(selectedCustomer.note);
    }
  }, [selectedCustomer, selectedCustomer?.note]);

  return (
    <DocumentContainer>
      {newDocModel && <AddClient />}
      <FilterWrapper>
        <FilterHeading>{customers.length} סה״כ</FilterHeading>
      </FilterWrapper>

      <DocumentsList>
        <Content>
          {selectedCustomer && (
            <ClientDetails
              {...selectedCustomer}
              key={selectedCustomer.id}
              handleSelectChange={handleSelectChange}
            />
          )}
          <TextAreaWrapper>
            <TextArea
              value={textValue}
              onChange={handleTextareaChange}
              onBlur={handleTextareaChangeSave}
              id="myTextarea"
              rows="50"
              cols="50"
            />
          </TextAreaWrapper>
        </Content>
      </DocumentsList>
    </DocumentContainer>
  );
}

export default ClientDetailsWrapper;
