import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Logo.png'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import { Avatar } from '@material-ui/core';
const Header = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    const history = useHistory();
    const handleHistory = () =>{
        history.push('/signIn');
    }
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
    </Navbar.Collapse>
    <div className ='d-flex justify-content-between'>
            { 
            loginUser.success && <p style={{fontSize:'16px',color:'white',marginRight:'36px'}}>{loginUser.displayName}</p>
            }
            { 
            loginUser.success && <button style={{marginLeft:'12px'}}  className ="login-btn">Logout</button>
            }
            {
                !loginUser.success && <button onClick={handleHistory} className ="login-btn">Login</button>
            }
          </div>
    </Navbar>
    
          </div>
        </div>
    );
};

export default Header;