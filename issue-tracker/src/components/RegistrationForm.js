import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', { username, password });
      console.log(response.data);
      // Handle successful registration
    } catch (error) {
      console.error(error);
      // Handle registration error
    }
  };

  return (
    <form className="reg-form" onSubmit={handleRegistration}>
        <h1>Sign up</h1>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            placeholder="Pick a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            placeholder="Set a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Sign up</button>

        <p className="text">Or sign up using</p>

        <div className="alt-reg">
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
    </form>
    );
};

export default RegistrationForm;
