/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(loginAction());

    navigate("/CheckPurchase");
  };

  return <button onClick={loginHandler}>login</button>;
};

export default Login;
