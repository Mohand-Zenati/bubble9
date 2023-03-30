import React, {useEffect, useReducer, useState} from 'react';

import { FaTrash } from "react-icons/fa";



function ListItem({id, nom, prenom, datee, horaire,  place, prix, handleDelete}) {
  let [tickets, setTickets] = useState(null)


  useEffect(() => {
    fetch("http://localhost/billeteriee/api/lire.php")
      .then(response => response.json())
      .then(data => setTickets(data.billets))
  }, []) // ajout de "refresh" ici
  


 

function handleClick() {
  fetch(`http://localhost/billeteriee/api/supprimer.php?id=${id}`, { method: 'DELETE' })
    .then(() => {
    
    
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
          
          <td onClick={() => { handleClick(); window.location.reload(true); }}><FaTrash /></td>


        </tr>
  )
}

export default ListItem