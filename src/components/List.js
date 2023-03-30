import React, {useEffect, useState} from 'react'
import './list.css';
import ListItem from './ListItem';

function List() {
  let [tickets, setTickets] = useState(null)


  
  function handleDelete() {

  }

  useEffect(() => {
    fetch("http://localhost/billeteriee/api/lire.php")
    .then(response => response.json())
    .then(data => setTickets(data.billets))

  
  },[])

  return (
  <div> 
    <div class='table-card'>
    <h2>Information</h2>
    <table class='table'>
      <thead>
        <tr>
          <td id='tour-table'>Ticket</td>
          <td>nom</td>
          <td>Date de réservation</td>
          <td>Horaire</td>
          <td>Nombre de place</td>
          <td>Prix total</td>
        </tr>
      </thead>
      <tbody>
        {
        
            tickets && tickets.map((item, index) => ( <ListItem key={index} id={item.id} nom={item.nom} prenom={item.prenom} datee={item.datee} horaire={item.horaire}   place={item.place}  prix={item.prix} onDelete={handleDelete} />))
        }
         
      </tbody>
    </table>
  </div>
</div>
  )
}

export default List