import React, {useEffect, useReducer, useState} from 'react';

import { FaTrash } from "react-icons/fa";



function ListItem({id, nom, prenom, datee, horaire,  place, prix, handleDelete}) {  
  function handleClick() {
    fetch(`https://bubble9.zenati.butmmi.o2switch.site/api/supprimer.php?id=${id}`, { method: 'DELETE' })
      .then(() => {
        handleDelete();
      })
      .catch((error) => {
        console.error('Failed to delete element:', error);
      });
  }

  return (

    
        <tr>
        <td>Ticket n°{id}</td>
          <td>{nom} {prenom}</td>
          <td>{datee}</td>
          <td>{horaire}</td>
          <td>{place}</td>
          <td>{prix}€</td>
          
          <td onClick={() => { handleClick(); }}><FaTrash /></td>


        </tr>
  )
}

export default ListItem