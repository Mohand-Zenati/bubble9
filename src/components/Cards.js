import React, {useEffect, useState} from 'react'
import Card from './Card'



function Cards() {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      const response1 = await fetch('http://bubble9.zenati.butmmi.o2switch.site/visite_total.php');
      const json1 = await response1.json();


      const response2 = await fetch('http://bubble9.zenati.butmmi.o2switch.site/reservation_total.php');
      const json2 = await response2.json();   
      
      const response3 = await fetch('http://bubble9.zenati.butmmi.o2switch.site/somme.php');
      const json3 = await response3.json();

      setStat([{title: "Visite", total: json1}, {title: "Réservation", total: json2}, {title: "Revenu", total: json3 + "\u20AC"}]);

    };

    fetchData();
  }, []);

  console.log('stats => ', stat)
  
  return (
    <div className='dashcards'>
      {  console.log('stats => ', stat)}
        {
            stat && stat.length >0 && stat.map((total, index) => ( <Card key={index} title={total.title} total={total.total}></Card>))
        }
    </div>
  )
}

export default Cards