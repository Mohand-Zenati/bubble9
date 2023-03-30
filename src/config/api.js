import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';


function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://bubble9.zenati.butmmi.o2switch.site/api.php')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error(error));
  }, []);

  console.log(data);

  return (
    <div>
      {
        data.orders.map((item, index) => ( <ListItem key={index} id={item.id} nom={item.nom} prenom={item.prenom}  />))
    } 
    </div>
  );
}

export default Api;
