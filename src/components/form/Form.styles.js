import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  margin-top: 1rem;
  * {
    border-radius: 30px;
    padding: 0.5rem;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.2);
    &:focus {
      outline: goldenrod solid 2px;
    }
  }

  textarea {
    min-height: 5rem;
  }

  button {
    background-color: #aac854;
    color: #fff;
  }
`;

export const Error = styled.div`
  font-size: small;
  color: red;
`;
