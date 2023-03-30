import React, { useState, useEffect } from 'react';

function Card({title, total}) {
  return (
    <div className='col'>
      <div className='card'>
        <i className='fas fa-home'></i>
        <h5 className='card__subtitle'>{title}</h5>
        <h2 className='card__title'>{total}</h2>
        
      </div>
  
    </div>
  );
}

export default Card;
