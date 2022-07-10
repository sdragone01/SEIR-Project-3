// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import './LogInForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (

    <div className="container">
      <div className="Form-Two-Img">
      </div>

      <form className="Form" autoComplete="off" >
        <div className="Head">

          <h1 className="headtext">Welcome Back</h1>
          <p className="sub-text">Login to your account</p>
        </div>

        <div className="email">
          <input className="form-input" placeholder="  &#64; | E-MAIL" type="text" name="email" value={credentials.email} onChange={handleChange} required />
        </div>

        <div className="pass">
          <input className="form-input" placeholder="&#128274; | PASSWORD" type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>



        <div className="button">
          <button className="formButt" type="submit">LOG IN</button>
        </div>

      </form>

    </div>









  );
}