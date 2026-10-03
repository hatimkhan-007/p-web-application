import { Link } from 'react-router-dom'
import { navItems, socialLinks, legalLinks } from '../data/navData'
import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer>
      {navItems.map((column) => (
        <div className="footer-div" key={column.title}>
          <h2>{column.title}</h2>
          <ul className="navbar-lists">
            {column.links.map((link) => (
              <li className="navbar-list" key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer-div">
        <h2>Follow us on:</h2>
        <ul className="navbar-lists">
          {socialLinks.map((social) => (
            <li className="navbar-list" key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="end-footer">
        <div className="start-f">
          {legalLinks.map((link) => (
            <Link to={link.to} key={link.to}>{link.label}</Link>
          ))}
        </div>
        <div className="end-f">Copyright &copy; {currentYear} LOHANIS. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer