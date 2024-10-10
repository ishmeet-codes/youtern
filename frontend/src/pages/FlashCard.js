// src/components/FlashCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FlashCard.css'; // Ensure you have a CSS file for styling

const FlashCard = ({ title, image, link }) => {
    return (
        <div className="flash-card">
            <Link to={link}>
                <img src={image} alt={title} className="flash-card-image" />
                <h3>{title}</h3>
            </Link>
        </div>
    );
};

export default FlashCard;
