import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-Logo">Logo</div>
            <ul className="Navbar-Item-Container">
                <li className="Navbar-Item"><Link to="/MHW">MHW</Link></li>
                <li className="Navbar-Item"><Link to="/MHWI">MHWI</Link></li>
                <li className="Navbar-Item"><Link to="/Rise">Rise</Link></li>
            </ul>
        </div>
    )
}