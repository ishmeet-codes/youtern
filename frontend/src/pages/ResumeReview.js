// src/pages/ResumeReview.js
import React, { useState } from 'react';
import '../style/ResumeReview.css';

const ResumeReview = () => {
    const [file, setFile] = useState(null);
    const [feedback, setFeedback] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFeedback = () => {
        if (!file) {
            setFeedback('Please upload a resume to get feedback.');
            return;
        }

        // Simulating AI-driven feedback generation with professional points
        setFeedback(`
            Here is your feedback to make your resume better for top companies:
            1. Include a clear objective that aligns with the job you're applying for.
            2. Add measurable achievements in your work experience (e.g., "Improved sales by 20%").
            3. Use industry-specific keywords for the role you're targeting.
            4. Ensure formatting is consistent and avoid cluttered design.
            5. Limit your resume to 1-2 pages and focus on relevant skills.
        `);
    };

    const handleReset = () => {
        setFile(null);
        setFeedback('');
    };

    return (
        <div className="resume-review-container">
            <h2>Submit Your Resume for AI Feedback</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button className="submit-button" onClick={handleFeedback}>Get Feedback</button>

            {feedback && (
                <div className="feedback-section">
                    <h3>Feedback:</h3>
                    <ul className="feedback-points">
                        {feedback.split('\n').map((point, index) => (
                            point && <li key={index}>{point.trim()}</li>
                        ))}
                    </ul>
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                </div>
            )}
        </div>
    );
};

export default ResumeReview;