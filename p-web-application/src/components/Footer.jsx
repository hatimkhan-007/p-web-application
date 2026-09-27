import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='footer-div'>
            <h2>Services</h2>
            <ul className='navbar-lists'>
                <li className='navbar-list'><a href="#">Team Augmentation</a></li>
                <li className='navbar-list'><a href="#">MVP Development</a></li>
                <li className='navbar-list'><a href="#">App Development</a></li>
                <li className='navbar-list'><a href="#">Robotics</a></li>
                <li className='navbar-list'><a href="#">AI Transformation</a></li>
            </ul>
        </div>
        <div className='footer-div'>
            <h2>Technologies</h2>
            <ul className='navbar-lists'>
                <li className='navbar-list'><a href="#">AI/Machine Learning</a></li>
                <li className='navbar-list'><a href="#">Computer Vision</a></li>
                <li className='navbar-list'><a href="#">Blockchain</a></li>
                <li className='navbar-list'><a href="#">Stacks</a></li>
                <li className='navbar-list'><a href="#">App Development</a></li>
            </ul>
        </div>
        <div className='footer-div'>
            <h2>Customers</h2>
            <ul className='navbar-lists'>
                <li className='navbar-list'><a href="#">Startups</a></li>
                <li className='navbar-list'><a href="#">SaaS Companies</a></li>
                <li className='navbar-list'><a href="#">App Companies</a></li>
                <li className='navbar-list'><a href="#">Marketing Agencies</a></li>
                <li className='navbar-list'><a href="#">Enterprises</a></li>
            </ul>
        </div>
        <div className='footer-div'>
            <h2>Look Inside</h2>
            <ul className='navbar-lists'>
                <li className='navbar-list'><a href="#">Blog</a></li>
                <li className='navbar-list'><a href="#">Portfolio</a></li>
                <li className='navbar-list'><a href="#">Careers</a></li>
            </ul>
        </div>
        <div className='footer-div'>
            <h2>About Us</h2>
            <ul className='navbar-lists'>
                <li className='navbar-list'><a href="#">History</a></li>
                <li className='navbar-list'><a href="#">Present</a></li>
                <li className='navbar-list'><a href="#">Future</a></li>
                <li className='navbar-list'><a href="#">Why us?</a></li>
                <li className='navbar-list'><a href="#">Contact us</a></li>
            </ul>
        </div>
        <div className='footer-div'>
            <h2>Follow us on:</h2>
            <ul className='navbar-lists'>
            </ul>
        </div>
        <div className='end-footer'>
            <div className='start-f'>
                <a href="#">Privacy Policy</a>
                <a href="#">IMS Policy</a>
            </div>
            <div className='end-f'>Copyright &copy; 2026 LOHANIS. All Rights Reserved.</div>
        </div>
    </footer>
  )
}

export default Footer