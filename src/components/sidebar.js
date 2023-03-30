import React, { useState } from 'react';
// import './sidebar.css';
import { RiDashboardFill } from "react-icons/ri";




function Sidebar() {
  const [activeButton, setActiveButton] = useState('Accueil');
  

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
    const logout = () => {
    localStorage.removeItem('authToken');
    window.location = "/";
  }

  return (
    <div className='sidebar'>
      <h3>Bubble9 - Back Office</h3>
      <ul className='sidebar-nav'>
        <li>
          <button onClick={() => handleButtonClick('Accueil')}>
            <p>{RiDashboardFill}</p>
            <span className={activeButton === 'Accueil' ? 'active'  : ''}>Dashboard</span>
            <i className='fas fa-home'></i>
          </button>

          <button className='btn-lougout'onClick={() => logout()}>
          Logout
        </button>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
