// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/logos/logo1.jpg'; // Adjust the path to your logo
import '../style/Header.css'; // Import the CSS for the header

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1 className="name">Youtern</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/internship">Internship</Link>
                    </li>
                    <li>
                        <Link to="/mentoring">Mentoring</Link>
                    </li>
                    <li>
                        <Link to="/jobportal">Job Portal</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                     <Link to="/signup">SignUp/Login</Link>
                    </li>
                  </ul>
            </nav>
        </header>
    );
};

export default Header;
