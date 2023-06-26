import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data);
      // Handle successful login
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Login</button>

        <p className="text">Or login using</p>

        <div className="alt-login">
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
    </form>
  );
};

export default LoginForm;
