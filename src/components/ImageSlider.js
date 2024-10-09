import React, { useState } from 'react';
import '../style/ImageSlider.css'; // Ensure correct path to your CSS file
import { SliderData } from '../components/SliderData'; // Ensure correct path to SliderData

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize currentIndex to 0

    // Go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <button className="arrow left" onClick={prevSlide}>‹</button>

            {SliderData.map((slide, index) => (
                <div
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                    key={index}
                >
                    {index === currentIndex && (
                        <img src={slide.image} alt="slide" className="image" />
                    )}
                </div>
            ))}

            <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
    );
};

export default ImageSlider;
