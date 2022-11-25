import React from "react";
import "./ForgotPassword.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  let navigate = useNavigate();
  const handleForgotPassword = async () => {
    if (email === "") {
      return setError("invalid email");
    }
    setError("");
    var data = JSON.stringify({
      email: email,
    });

    var config = {
      method: "post",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/users/forgot-password/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(JSON.stringify(response.data));
        let resetUrl = await response.data.resetUrl;
        let resetUrlArray = resetUrl.split("/");
        console.log(resetUrlArray);
        let id = await resetUrlArray[resetUrlArray.length - 1];
        console.log(id);
        navigate("/resetpassword/" + id);
      })
      .catch(function (error) {
        setError(error?.message);
        console.log(error);
      });
  };
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="ForgotPassword">
      <div className="left-banner"></div>
      <div className="rightForm">
        <h1 className="form-title">Reset Password</h1>
        <div className="form">
          <div className={"emailBox"}>
            <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              className={"emailInput"}
              onChange={(e) => {
                setEmail(e.target.value);
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

export default ForgotPassword;
