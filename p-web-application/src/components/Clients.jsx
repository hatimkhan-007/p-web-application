import clientsData from '../data/Clientdata'
import './Clients.css'

function Clients() {
  const loopedClients = [...clientsData, ...clientsData]

  return (
    <section className="client-section" aria-label="Our clients">
      <h2>Our Clients</h2>
      <div className="client-slider-wrapper">
        <div className="client-list">
          {loopedClients.map((client, index) => {
            const isCopy = index >= clientsData.length

            return (
              <div
                className="client-item"
                key={`${client.name}-${index}`}
                aria-hidden={isCopy || undefined}
              >
                <img
                  src={client.logo}
                  alt={isCopy ? '' : client.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Clients