import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Account from "./Account";

const API_KEY = "1e05d6c6fe757614cf08f4083d927aaf";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const username = values.username;
      const password = values.password;

      try {
        const response1 = await axios.get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
        );

        const response2 = await axios.post(
          `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
          {
            username: username,
            password: password,
            request_token: response1.data.request_token,
          }
        );

        const requestToken = response2.data.request_token;
        localStorage.setItem("token", requestToken);

        const response3 = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
          {
            request_token: requestToken,
          }
        );

        const sessionId = response3.data.session_id;
        localStorage.setItem("session_id", sessionId);
        alert("Login success!");

        navigate("/account");
      } catch (error) {
        alert("Service Error, Username dan Password did not match ");
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="login-page">
        <div>
          <h2 style={{ color: "white" }}>Login Page</h2>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="input-form"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="input-form"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <button type="submit">Submit</button>
          <div className="pass-clue">
            Try This Account <br />
            Username : aacandra
            <br />
            Pass : rakazaidan
            <br />
          </div>
          <div id="login-message"></div>
        </form>
      </div>
    </>
  );
};

export default Login;
