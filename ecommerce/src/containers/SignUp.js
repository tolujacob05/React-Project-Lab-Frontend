import React, { useState } from "react";
import F10 from "./Pictures/F10.png";
import styles from "./SignUp.module.css";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
      passwordConfirm: password,
      role: "user",
    });

    var config = {
      method: "post",
      url: "https://shopify-nextgen.herokuapp.com/api/v1/users/signUp",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response?.data?.status === "success") {
          localStorage.setItem("userToken", response.data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.data.user)
          );
          navigate(`/`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className={styles.field}>
        <div className={styles.sign}>
          <img src={F10} alt="" />
        </div>

        <div className={styles.set}>
          <div className={styles.all}>
            <h2> Get Started</h2>
            <p>
              Aleady have an account? <a href="login">Log in.</a>
            </p>

            <div className={styles.user}>
              <h3>Full Name</h3>
              <input
                type="text"
                placeholder="full Name"
                className={styles.name}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className={styles.email}>
              <h3>Email</h3>
              <input
                type="email"
                placeholder="Email"
                className={styles.name}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.phone}>
              <h3>Phone Number</h3>
              <input
                type="tel"
                placeholder="Phone Number"
                className={styles.name}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className={styles.pass}>
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Password"
                className={styles.name}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={styles.pass}>
              <h3> Confirm Password</h3>
              <input
                type="password"
                placeholder="Password"
                className={styles.name}
              />
            </div>
            <div
              className={styles.in}
              onClick={(e) => {
                handleSignUp(e);
              }}
            >
              <h2>
                <a href="signin">Sign Up</a>
              </h2>
            </div>
          </div>

          <div className={styles.split}>
            <div className={styles.line1}>
              <hr />
            </div>
            <h5>Or sign in with</h5>
            <div className={styles.line2}>
              <hr />
            </div>
          </div>

          <div className={styles.awesome}>
            <div>
              <FaFacebook />
            </div>
            <div className={styles.twitter}>
              <FaTwitter />
            </div>
            <div className={styles.google}>
              <FaGoogle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
