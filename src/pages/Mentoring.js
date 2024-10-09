// src/pages/MentoringPage.js
import React from 'react';
import '../style/MentoringPage.css'; // Create this CSS file for styling

const MentoringPage = () => {
    const mentoringSessions = [
        { date: '2024-10-15', time: '10:00 AM', mentor: 'Alice Smith', topic: 'Career Guidance' },
        { date: '2024-10-16', time: '2:00 PM', mentor: 'John Doe', topic: 'Resume Building' },
        { date: '2024-10-17', time: '1:00 PM', mentor: 'Emily Johnson', topic: 'Interview Preparation' },
        { date: '2024-10-18', time: '11:00 AM', mentor: 'Michael Brown', topic: 'Networking Skills' },
        { date: '2024-10-19', time: '3:00 PM', mentor: 'Sarah Davis', topic: 'Skill Development' },
    ];

    return (
        <div className="mentoring-page">
            <h2>Mentoring Schedule</h2>
            <table className="mentoring-schedule">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mentor</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {mentoringSessions.map((session, index) => (
                        <tr key={index}>
                            <td>{session.date}</td>
                            <td>{session.time}</td>
                            <td>{session.mentor}</td>
                            <td>{session.topic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MentoringPage;
