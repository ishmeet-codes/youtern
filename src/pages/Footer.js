// src/pages/Footer.js
import React from 'react';
import '../style/Footer.css'; // Create this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        We are dedicated to connecting job seekers with opportunities and empowering them through mentorship and resources.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Contact Details</h3>
                    <p>Email: info@youtern.com</p>
                    <p>Phone: 9876543210</p>
                </div>
                <div className="footer-section">
                    <h3>Message</h3>
                    <p>
                        "Your dream job is just a click away! Let us help you find it."
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Job Portal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
