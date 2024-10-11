// src/pages/ResumeFeedback.js
import React from 'react';

const ResumeFeedback = ({ feedback }) => {
    return (
        <div>
            <h3>Feedback:</h3>
            <ul>
                {feedback.split('\n').map((point, index) => (
                    point && <li key={index}>{point.trim()}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeFeedback;