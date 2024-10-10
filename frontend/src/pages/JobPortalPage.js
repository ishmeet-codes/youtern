// src/components/JobPortalPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/JobPortalPage.css'; // Assuming you'll style it similarly to the InternshipPage

const JobPortalPage = () => {
  const [jobs, setJobs] = useState([]); // State to store job data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [applicationStatus, setApplicationStatus] = useState(''); // State to show application status

  // Fetch job data from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/jobs'); // Axios request to fetch jobs
        setJobs(response.data); // Store the jobs in state
      } catch (err) {
        setError(err.response ? err.response.data : err.message); // Capture and display error
      } finally {
        setLoading(false); // Set loading to false after request completes
      }
    };

    fetchJobs(); // Call the function to fetch jobs
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Function to handle "Apply" button click
  const handleApply = async (jobId) => {
    try {
      const response = await axios.post('http://localhost:3000/applications', {
        jobId: jobId,
        userId: 123, // Replace this with actual user ID from your auth system
        message: "I would like to apply for this job.",
      });
      setApplicationStatus(`Application for job ${jobId} submitted successfully!`);
    } catch (error) {
      setApplicationStatus(`Failed to submit application: ${error.message}`);
    }
  };

  // If loading, show loading message
  if (loading) return <p>Loading jobs...</p>;

  // If there's an error, display error message
  if (error) return <p>Error: {error}</p>;

  // Display list of jobs once data is fetched
  return (
    <div className="job-portal-page">
      <h1>Job Opportunities</h1>
      <p>Your one-stop platform for job opportunities and career growth.</p>

      {/* Display the application status message */}
      {applicationStatus && <p className="application-status">{applicationStatus}</p>}

      {/* Display the list of jobs */}
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            {/* Apply Button */}
            <button
              className="apply-button"
              onClick={() => handleApply(job.id)}
            >
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPortalPage;
