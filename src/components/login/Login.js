/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const loginHandler = () => {
    dispatch(loginAction());
  };

  // useEffect(() => {
  //   if (response) {
  //     if (response.responseCode === 0) {
  //       dispatch(loginAction(response));
  //     } else {
  //       alert(response.responseMessage);
  //     }
  //   }
  // }, []);

  return <button onClick={loginHandler}>login</button>;
};

export default Login;
