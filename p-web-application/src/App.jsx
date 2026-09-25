import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero_section from './components/Hero-section.jsx'
import Clients from './components/Clients.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Clients />
    </>
  )
}

export default App