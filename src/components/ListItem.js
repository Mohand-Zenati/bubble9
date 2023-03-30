import React from 'react';
import { FaTrash } from "react-icons/fa";

function ListItem({ id, nom, prenom, datee, horaire, place, prix, onDelete }) {

  function handleClick() {
    fetch(`https://bubble9.zenati.butmmi.o2switch.site/api/supprimer.php?id=${id}`, { method: 'DELETE' })
      .then(() => {
        onDelete();
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
      <td onClick={handleClick}><FaTrash /></td>
    </tr>
  );
}

export default ListItem;
