import React from 'react';
import clientsData from '../data/Clientdata';
import './Clients.css';

function Clients() {
  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <div className='client-section'>
      <h1>Our Clients</h1>
      
      <div className='client-slider-wrapper'>
        <div className='client-list'>
          {duplicatedClients.map((client, index) => (
            <div key={index} className='client-item'>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
