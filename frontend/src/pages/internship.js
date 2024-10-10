// src/pages/InternshipPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/internships.css'; // Import CSS for styling

const InternshipPage = () => {
  const [internships, setInternships] = useState([]); // State to store internship data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [applicationStatus, setApplicationStatus] = useState(''); // State to show application status

  // Fetch internship data from API
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('http://localhost:3000/internships'); // Axios request to fetch internships
        setInternships(response.data); // Store the internships in state
      } catch (err) {
        setError(err.response ? err.response.data : err.message); // Capture and display error
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    fetchInternships(); // Call the function to fetch internships
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Function to handle "Apply" button click
  const handleApply = async (internshipId) => {
    try {
      const response = await axios.post('http://localhost:3000/applications', {
        internshipId: internshipId,
        userId: 123, // Replace this with actual user ID from your auth system
        message: "I would like to apply for this internship.",
      });
      setApplicationStatus(`Application for internship ${internshipId} submitted successfully!`);
    } catch (error) {
      setApplicationStatus(`Failed to submit application: ${error.message}`);
    }
  };

  // If loading, show loading message
  if (loading) return <p>Loading internships...</p>;

  // If there's an error, display error message
  if (error) return <p>Error: {error}</p>;

  // Display list of internships once data is fetched
  return (
    <div className="internship-page">
      <h1>Internship Opportunities</h1>
      <p>Here you can find various internship listings.</p>

      {/* Display the application status message */}
      {applicationStatus && <p className="application-status">{applicationStatus}</p>}

      {/* Display the list of internships */}
      <ul className="internship-list">
        {internships.map((internship) => (
          <li key={internship.id} className="internship-item">
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
            {/* Apply Button */}
            <button
              className="apply-button"
              onClick={() => handleApply(internship.id)}
            >
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipPage;
