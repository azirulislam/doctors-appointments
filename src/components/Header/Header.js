import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register now</Link>
        </div>
    </nav>
    );
};

export default Header;