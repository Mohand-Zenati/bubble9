import React, {useEffect, useState} from 'react'
import './list.css';
import ListItem from './ListItem';

function List() {
  let [tickets, setTickets] = useState(null)

  useEffect(() => {
    fetch("https://bubble9.zenati.butmmi.o2switch.site/api/lire.php")
      .then(response => response.json())
      .then(data => setTickets(data.billets))
  }, [])

  function refreshTickets() {
    fetch("https://bubble9.zenati.butmmi.o2switch.site/api/lire.php")
      .then(response => response.json())
      .then(data => setTickets(data.billets))
  }

  function handleDelete(id) {
    fetch(`https://bubble9.zenati.butmmi.o2switch.site/api/supprimer.php?id=${id}`, { method: 'DELETE' })
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.error('Failed to delete element:', error);
      });
  }

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
              tickets && tickets.map((item, index) => (
                <ListItem
                  key={index}
                  id={item.id}
                  nom={item.nom}
                  prenom={item.prenom}
                  datee={item.datee}
                  horaire={item.horaire}
                  place={item.place}
                  prix={item.prix}
                  handleDelete={() => handleDelete(item.id)}
                />
              ))
            }
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default List
