import React, { useState, useEffect } from 'react';
import '../styling/Furniture.css';
import Sidenav from './Sidenav';
import '../styling/Sidenav.css';

function Electronics(props) {


  const [data, setData] = useState([]);
  

  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:5001/')
      .then(response => response.json())
      .then(data => {
        setData(data);
       // Print the fetched data to the console
      })
      .catch(error => console.log(error));
  }, []);

 
  const filteredData = data.filter(item => item.productName.toLowerCase().includes(props.type));


  

  return (
    <>
    <Sidenav />
    <div className="proddiv">
       
  {filteredData.map(item => (
    <div className='prod' key={item._id}>
      <img src={`${process.env.PUBLIC_URL}/${item.image}`} height={175} width={175} alt="" />
      <h4 style={{ marginBottom: '0.5rem' }} className='brandNameMain'>
        {item.brandName} - {item.productName}
        <br />
        {item.price}$
      </h4>
     <h4>{props.type}</h4>
    </div>
  ))}
</div>
</>

  );
}

export default Electronics;
