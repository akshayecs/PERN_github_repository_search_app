// import React, { useState } from 'react';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Assuming you're using Reactstrap for Bootstrap components

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label for="username">Username</Label>
//         <Input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
//       </FormGroup>
//       <FormGroup>
//         <Label for="email">Email</Label>
//         <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
//       </FormGroup>
//       <FormGroup>
//         <Label for="password">Password</Label>
//         <Input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
//       </FormGroup>
//       <Button color="primary" type="submit">Sign Up</Button>
//     </Form>
//   );
// };

// export default Signup;

import React, { useState } from 'react'
import '../components/style.css'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [role,setRole] = useState();

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        await axios.post('http://localhost:8000/user/register', { username, email, password, role });
        navigate('/');
      } catch (error) {
        console.error('Error registering user:', error);
      }
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='enter username' className='form-control' 
            onChange={(e) => {setUsername(e.target.value)}} />
          </div>
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
            <label htmlFor='role'>Role</label>
            <input type='text' placeholder='enter role' className='form-control'
            onChange={(e) => {setRole(e.target.value)}}
            />
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
        </form>
        <p className='text-end mt-2'>
          Already Registered ?<Link to="/" className='ms-2'> Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;
