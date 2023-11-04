import React from "react";
import {
  Button,
  FormField,
  FormTitle,
  Input,
  Label,
  LoginForm,
  LoginPage,
} from "./Login.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email is required"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: onSendMessage,
  });

  async function onSendMessage() {
    try {
      const { email, password } = formik.values;
      dispatch(getUser({ email, password }));
      formik.resetForm();
    } catch (error) {
      // Handle any errors from the API or form submission
    }
  }

  return (
    <LoginPage>
      <LoginForm onSubmit={formik.handleSubmit}>
        <FormTitle>התחברות</FormTitle>

        <FormField>
          <Label>אימייל</Label>
          <Input
            type="text"
            placeholder="אימייל"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </FormField>

        <FormField>
          <Label>סיסמא</Label>
          <Input
            placeholder="סיסמא"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          />
        </FormField>

        <Button type="submit">שליחה</Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
