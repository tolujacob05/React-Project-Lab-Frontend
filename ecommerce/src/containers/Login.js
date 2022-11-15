import React, { useState } from "react";
import F10 from "./Pictures/F10.png";
import styles from "./Login.module.css";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    var data = {
      email: email,
      password: password,
    };

    var config = {
      method: "post",
      url: "http://localhost:3001/api/v1/users/signIn",
      data: data,
    };
    console.log(data);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response?.data?.status === "success"){
            localStorage.setItem("userToken", response.data.token);
           localStorage.setItem(
             "userInfo",
             JSON.stringify(response.data.data.user)
           );
            navigate(`/`);
        }else{
            alert("invalid email or password")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.field}>
        {/* Image */}
        <div className={styles.sign}>
          <img src={F10} alt="" />
        </div>

        <div className={styles.set}>
          <div className={styles.all}>
            <h2> Log in </h2>

            <div className={styles.email}>
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Email"
                className={styles.name}
                onChange={(e) => {
                  setEmail(e.target.value);
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

            <div
              className={styles.in}
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              <h2>
                <a href="/login">Login</a>
              </h2>

              <p>
                Don't have an account?<a href="signup">Sign up</a>
              </p>
            </div>
          </div>

          {/* Horizontal line */}
          <div className={styles.split}>
            <div className={styles.line1}>
              <hr />
            </div>
            <h5>Or login in with</h5>
            <div className={styles.line2}>
              <hr />
            </div>
          </div>

          {/* Icons */}
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

export default Login;
