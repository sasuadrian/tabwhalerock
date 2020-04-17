import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link to="/" className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;