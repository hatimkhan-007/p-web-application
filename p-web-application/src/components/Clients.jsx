import React from 'react'
import clientsData from '../data/Clientdata';
import './Clients.css';

function Clients() {
  return (
    <div className='client-section'>
        <h1>Clients</h1>
        <div className='client-list'>
            {clientsData.map((client, index) => (
                <div key={index} className='client-item'>
                    <img src={client.logo} alt={client.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clients;