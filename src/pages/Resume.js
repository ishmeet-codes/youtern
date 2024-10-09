import React from 'react';
import '../style/ResumePage.css';
import sampleResume from '../images/logos/img11.jpg'; // Replace with the correct path for the sample resume image

const ResumePage = () => {
    return (
        <div className="resume-page">
            <h1>Resume Guide</h1>
            <div className="resume-guide">
                <h2>How to Create an Effective Resume</h2>
                <ul>
                    <li><strong>Contact Information:</strong> Include your full name, email address, phone number, and LinkedIn profile (if available).</li>
                    <li><strong>Professional Summary:</strong> Write a brief summary highlighting your skills and experience.</li>
                    <li><strong>Work Experience:</strong> List your work experience starting with the most recent. Use bullet points to describe your achievements.</li>
                    <li><strong>Education:</strong> Mention your academic qualifications, including the degree, institution, and graduation year.</li>
                    <li><strong>Skills:</strong> List relevant skills such as technical skills, soft skills, and certifications.</li>
                    <li><strong>Projects:</strong> Include any projects that showcase your abilities and achievements.</li>
                    <li><strong>References:</strong> You can optionally add references or mention that they are available upon request.</li>
                </ul>
            </div>
            <div className="sample-resume-section">
                <h2>Sample Resume</h2>
                <img src={sampleResume} alt="Sample Resume" className="sample-resume" />
            </div>
        </div>
    );
};

export default ResumePage;
