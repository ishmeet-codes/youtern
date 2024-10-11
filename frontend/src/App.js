// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header'; // Ensure this import is present only once
import HomePage from './pages/HomePage'; // Import your HomePage component
import InternshipPage from './pages/internship'; // Import your InternshipPage component
import MentoringPage from './pages/Mentoring';
import JobPortalPage from './pages/JobPortalPage'; // Import your JobPortalPage component
import ResumePage from './pages/Resume'; // Import your Resume Page component
import SignUpLoginPage from './pages/SignUpLoginPage';
import HiringPanel from './pages/HiringPanel'; // Import the HiringPanel
import HackathonPage from './pages/Hackathon';
import AssignmentPage from './pages/Assignment';
import CompetitionPage from './pages/Competition';
import PlacementsPage from './pages/Placements';
import FlashcardsPage from './pages/FlashcardsPage'; // Import FlashcardsPage
import ResumeReview from './pages/ResumeReview'; // Check if this is declared again

const App = () => {
    return (
        <Router>
            <Header /> {/* Include the Header component */}
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Home page */}
                <Route path="/internship" element={<InternshipPage />} /> {/* Internship page */}
                <Route path="/mentoring" element={<MentoringPage />} /> {/* Mentoring page */}
                <Route path="/jobportal" element={<JobPortalPage />} /> {/* Job Portal page */}
                <Route path="/resume" element={<ResumePage />} /> {/* Resume page */}
                <Route path="/signup" element={<SignUpLoginPage />} />
                <Route path="/hiring-panel" element={<HiringPanel />} /> {/* Add the Hiring Panel route */}
                <Route path="/hackathon" element={<HackathonPage />} />
                <Route path="/assignment" element={<AssignmentPage />} />
                <Route path="/competition" element={<CompetitionPage />} />
                <Route path="/placements" element={<PlacementsPage />} />
                <Route path="/flashcards" element={<FlashcardsPage />} /> 
                <Route path="/resume" element={<ResumeReview />} /> 

            </Routes>
        </Router>
    );
};

export default App;
