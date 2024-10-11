// src/pages/Resume.js
import React from 'react';
import ResumeReview from './ResumeReview';
import sampleResume from '../images/logos/img11.jpg';
import '../style/ResumePage.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <h1>Resume Section</h1>
            <div className="resume-guide">
                <h2>How to Make a Resume</h2>
                <p>
                    A resume is your personal marketing document. Here are some tips to create an effective one:
                </p>
                <ul>
                    <li>Keep it concise and relevant.</li>
                    <li>Use clear formatting and headings.</li>
                    <li>Highlight your skills and achievements.</li>
                    <li>Tailor it for each job application.</li>
                </ul>
                <h2>Sample Resume</h2>
                <img 
                    src={sampleResume} 
                    alt="Sample Resume" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />

                {/* Link to the sample resume or display it here */}
            </div>
            <ResumeReview />
        </div>
    );
};

export default Resume;