import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()
  const handleLogin = () => {
     
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
      navigate('/profile')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='container'>
      <h1>Login</h1>
       <div>

      
      <input  type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
       
  
      <input
         type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      {error && <p style={{color: 'red'}}>{error}</p>}
       
      </div>
      <button onClick={handleLogin} className='con2'>Login
      <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Login;