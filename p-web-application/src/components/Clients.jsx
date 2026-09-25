import React from 'react'
import { List } from 'react-bootstrap-icons'

const clientsData = [
  "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", 
  "Client 6", "Client 7", "Client 8", "Client 9", "Client 10"
];

function Clients() {
  return (
    <div className='client-section'>
        <h1>Clients</h1>
        <div className='client-list'>
            {clientsData.map((client, index) => (
                <div key={index} className='client-item'>
                    <List size={24} />
                    <span>{client}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clients;