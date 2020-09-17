import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Logo.png'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container'>
          <div>
          <Navbar expand="lg">
        <Link to="/home"><img className='traveling-guru' src={logo} alt=""/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="inputWithIcon">
            <input type="text" placeholder='Search your Destination'/>
            <FontAwesomeIcon className ='search-icon' icon={faSearchLocation}></FontAwesomeIcon>
        </div>
        <Nav className="mr-auto navLinks">
        <Link to='/news'>News</Link>
        <Link to='/description'>Description</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        </Nav>
        <button className ="login-btn">Login</button>
    </Navbar.Collapse>
    </Navbar>
          </div>
        </div>
    );
};

export default Header;