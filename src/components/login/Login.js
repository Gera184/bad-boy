import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "../../hooks/useAxios";
import { loginAction } from "../../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const { response, loading, error, operation } = useAxios();

  const loginHandler = () => {
    operation({
      method: "POST",
      url: "/GetRetailerParameters",
      headers: {
        accept: "*/*",
      },
      data: {
        loginRetailerId: 300000,
        sessionId: "string",
        userCode: "string",
        posManufacturerId: "string",
        posManufacturerVersion: "string",
        retailerId: 0,
      },
    });
  };

  useEffect(() => {
    if (response) {
      if (response.responseCode === 0) {
        dispatch(loginAction(response));
      } else {
        alert(response.responseMessage);
      }
    }
  }, [response]);

  console.log(response);
  if (error) {
    return <p>error</p>;
  }

  if (loading) {
    return <p>loading....</p>;
  }

  return <button onClick={loginHandler}>login</button>;
};

export default Login;
