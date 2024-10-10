import React from 'react';
import FlashCard from '../pages/FlashCard'; // Ensure correct path to your FlashCard component
import assignmentImage from '../images/logos/img9.jpg'; // Use relative paths for local images
import hackathonImage from '../images/logos/img5.jpg'; // Use relative paths for local images
import competitionImage from '../images/logos/img6.jpg'; // Replace with a direct image URL
import placementImage from '../images/logos/img7.jpg'; // Replace with a direct image URL
import '../style/FlashcardsPage.css'; // Ensure this CSS file exists

const FlashcardsPage = () => {
    return (
        <div className="flashcards-container">
            <FlashCard 
                title="Assignments" 
                image={assignmentImage} 
                link="/assignments" 
            />
            <FlashCard 
                title="Hackathons" 
                image={hackathonImage} 
                link="/hackathons" 
            />
            <FlashCard 
                title="Competitions" 
                image={competitionImage} 
                link="/competitions" 
            />
            <FlashCard 
                title="Placements" 
                image={placementImage} 
                link="/placements" 
            />
        </div>
    );
};

export default FlashcardsPage;
