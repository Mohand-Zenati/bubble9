import React from 'react'
import Cards from '../components/Cards'
import List from '../components/List'
import Sidebar from '../components/sidebar'
import './homepage.css'

function HomePage() {

  const logout = () => {
    localStorage.removeItem('authToken');
    window.location = "/";
  }

  return (
    <>

<div class='body'>
    <Sidebar />
    <div class='main'>
      <div class='main__content'>
        <h1 class='h1 title'>
          <i class='fas fa-home'></i>
          <span>Statistique</span>
        </h1>
    
        <Cards />
        <List />
      </div>
    </div>
  </div>
     
    </>
  )
}

export default HomePage
