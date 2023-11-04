import React from "react";
import {
  Backdrop,
  CloseBtn,
  Container,
  Heading,
  HeadingWrapper,
  Wrapper,
} from "./AddClient.styles";

import { useDispatch } from "react-redux";
import { hideNewDocModel } from "../../../redux/documents/documentSlice";
import { Form } from "../../../components/form/Form";

function AddDocument() {
  const dispatch = useDispatch();

  return (
    <>
      <Backdrop />
      <Wrapper>
        <HeadingWrapper>
          <Heading>Add Customer</Heading>
          <CloseBtn
            onClick={() => {
              dispatch(hideNewDocModel());
            }}
          >
            x
          </CloseBtn>
        </HeadingWrapper>
        <Container>
          <Form isAdmin={true} />
        </Container>
      </Wrapper>
    </>
  );
}

export default AddDocument;
