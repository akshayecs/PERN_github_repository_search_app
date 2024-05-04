
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/login', { email, password });
      const token = response.data.token; // Assuming the token is returned from the backend
      localStorage.setItem('token', token); // Save the token to local storage
      navigate('/search');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='enter your email' className='form-control' 
            onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='enter password' className='form-control' 
            onChange={(e) => {setPassword(e.target.value)}}
             />
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custome-control custom-checkbox' id='check' />
            <label htmlFor='check' className='custome-input-label ms-2'>
              Remember Me
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign In</button>
          </div>
          <p className='text-end mt-2'>
            Forgot <a href=''>Password?</a><Link to="/signup" className='ms-2'> SignUp</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
