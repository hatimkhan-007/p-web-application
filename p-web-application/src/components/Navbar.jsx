import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, List, X } from 'react-bootstrap-icons'
import logoUrl from '../assets/original_logo.png'
import { navItems } from '../data/navData'
import './Navbar.css'

const chevronStyle = { stroke: 'currentColor', strokeWidth: '1.5' }

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenIndex(null)
  }

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setOpenIndex(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const handleContact = () => {
    closeMenu()
    navigate('/contact')
  }

  return (
    <header className="navbar">
      <div className="logo-div">
        <Link to="/" onClick={closeMenu}>
          <img
            src={logoUrl}
            alt="Nexora logo"
            className="logo"
            width="866"
            height="288"
          />
        </Link>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={32} /> : <List size={32} />}
      </button>

      <nav
        id="primary-navigation"
        className={`navigation-bar${menuOpen ? ' open' : ''}`}
        aria-label="Primary"
      >
        <ul className="nav-links">
          {navItems.map((item, index) => {
            const isOpen = openIndex === index
            const links = item.links.filter((link) => !link.footerOnly)

            return (
              <li
                key={item.title}
                className={`nav-item dropdown${isOpen ? ' open' : ''}`}
              >
                <Link to={item.to} className="nav-title" onClick={closeMenu}>
                  {item.title} <ChevronDown size={12} style={chevronStyle} />
                </Link>

                <button
                  type="button"
                  className="dropdown-toggle"
                  aria-label={`Toggle ${item.title} menu`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <ChevronDown size={16} style={chevronStyle} />
                </button>

                <div className="dropdown-menu">
                  {links.map((link, linkIndex) => (
                    <Fragment key={link.to}>
                      <Link to={link.to} onClick={closeMenu}>
                        {link.label}
                      </Link>
                      {linkIndex < links.length - 1 && <hr />}
                    </Fragment>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>

        <button type="button" className="contact-btn" onClick={handleContact}>
          Contact Us
        </button>
      </nav>
    </header>
  )
}

export default Navbar