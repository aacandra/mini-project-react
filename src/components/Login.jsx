import React from 'react';
import "../style.css";
import { useFormik } from 'formik';
import axios from 'axios';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      const username = values.username;
      const password = values.password;
      axios({
        method: 'post',
        url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=1e05d6c6fe757614cf08f4083d927aaf',
        data: {
          username: username,
          password: password
        }
      })
      .then(function (response) {
        const token = response.data.request_token;
        axios({
          method: 'post',
          url: 'https://api.themoviedb.org/3/authentication/session/new?api_key=1e05d6c6fe757614cf08f4083d927aaf',
          data: {
            request_token: token
          }
        })
        .then(function (response) {
          console.log(response.data.session_id);
        });
      });
    },
  });

  return (
    <form className='login-form' onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input className='input-form'
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input className='input-form'
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
