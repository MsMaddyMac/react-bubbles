import React, { useState, useEffect } from "react";
// to use axiosWithAuth
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [error, setError] = useState();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      props.history.push('/account')
    }
  }, [])

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('/login', data)
    .then(res => {
      console.log('Login', res);
      localStorage.setItem('token', res.data.payload)
      
      props.history.push('/account');
    })
    .catch(err => {
      setError(err.response.data.error)
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}

        <input
          type='username'
          name='username'
          placeholder='Username'
          autoComplete='off'
          value={data.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          autoComplete='off'
          value={data.password}
          onChange={handleChange}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
