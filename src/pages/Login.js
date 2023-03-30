import React, { useState } from 'react';
import './login.css'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    const success = await props.onLogin(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h3>Connexion</h3>
      {error && <div className="error">{error}</div>}
      <div className='login-content'>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      
      <button type="submit">Login</button>
      </div>
    </form>
  );
}