import React from "react";
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
        retailerId: "10020076",
        sessionId: "aaa",
        userCode: "bbb",
        posManufacturerId: "ccc",
        posManufacturerVersion: "ddd",
      },
    });
  };

  //   if (error) {
  //     return <p>error</p>;
  //   }

  //   if (loading) {
  //     return <p>loading....</p>;
  //   }

  return <button onClick={loginHandler}>login</button>;
};

export default Login;
