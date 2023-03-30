
import './App.css';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("authToken"));
  
  async function handleLogin(username, password) {
    const response = await fetch('https://bubble9.zenati.butmmi.o2switch.site/api/connexion.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, 'mdp': password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {isLoggedIn ? <HomePage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App
