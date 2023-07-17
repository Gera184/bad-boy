/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(loginAction());

    navigate("/CheckPurchase");
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
