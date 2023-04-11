import React, { useState, useEffect } from 'react';
import "../style.css";
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import Account from './Account'; // import komponen Account

const Login = () => {
  const navigate = useNavigate(); // inisialisasi useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      request_token: ''
    },
    onSubmit: values => {
      const username = values.username;
      const password = values.password;
      const request_token = values.request_token;
      
      axios.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1e05d6c6fe757614cf08f4083d927aaf', {
        username: username,
        password: password,
        request_token: request_token
      })

      .then(result => {
         console.log(result.data); 
         alert('Succesful')
         localStorage.setItem('token', result.data.request_token)
         navigate('/account')
      })
      .catch(error => {
        alert('Service Error')
        console.log(error);
         
      });
    },
  });

   

  return (
    <>
     <div className='login-page'>
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
        <div id="login-message"></div>
      </form>
      </div>
    </>
  );
}

export default Login;
