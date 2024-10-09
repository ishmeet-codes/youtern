// src/App.js
import React from 'react';
import Slider from '../components/ImageSlider'; // Ensure to import your slider
import FlashcardsPage from '../pages/FlashcardsPage'; // Ensure to import your flashcards
import Footer from '../pages/Footer'; // Import the Footer component

const App = () => {
    return (
        <div>
            <Slider />
            <FlashcardsPage />
            <Footer /> {/* Include Footer here */}
        </div>
    );
};

export default App;
