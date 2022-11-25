import axios from "axios";
import React from "react";
import { useState } from "react";
import "./ForgotPassword.css";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { id } = useParams();
  let navigate = useNavigate();
  const handleForgotPassword = async () => {
    if (password === "") {
      return setError("invalid email");
    }
    var data = JSON.stringify({
      password: password,
      passwordConfirm: passwordConfirm,
    });

    var config = {
      method: "patch",
      url:
        "https://shopify-nextgen.herokuapp.com/api/v1/users/reset-password/" +
        id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.clear();
        alert("password updated");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <div className="ForgotPassword">
      <div className="left-banner"></div>
      <div className="rightForm">
        <h1 className="form-title">Reset Password</h1>
        <div className="form">
          <div className={"emailBox"}>
            <h3>Password</h3>
            <input
              type="text"
              placeholder="Enter new password"
              className={"emailInput"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={"emailBox"}>
            <h3>Confirm Password</h3>
            <input
              type="text"
              placeholder="confirm new password"
              className={"emailInput"}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <div className="button" onClick={handleForgotPassword}>
            Send Request
          </div>
          <small className="error">{error || null}</small>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
