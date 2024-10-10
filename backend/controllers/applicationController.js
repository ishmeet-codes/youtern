const { v4: uuidv4 } = require('uuid');
const { applications } = require('../utils/storage'); // Assuming this is where applications are stored

// Apply for a job or internship
exports.apply = (req, res) => {
  const { jobId, internshipId, userId, type } = req.body; // Include internshipId for internship applications
  const resume = req.file ? req.file.buffer.toString('base64') : null; // Store resume in memory as a base64 string

  // Create the application object
  const application = {
    id: uuidv4(), // Unique ID for the application
    jobId: jobId || null, // Assign jobId if present, otherwise null
    internshipId: internshipId || null, // Assign internshipId if present, otherwise null
    userId,
    resume,
    type, // Type can be 'job' or 'internship'
  };

  applications.push(application); // Store the application in memory
  res.status(201).json({ message: 'Application submitted successfully' });
};

// Get applications for a specific job or internship (HR only)
exports.getApplications = (req, res) => {
  const { jobId, internshipId } = req.params; // Destructure both jobId and internshipId from request params

  // Filter applications based on jobId or internshipId
  const filteredApplications = applications.filter(app => 
    (jobId && app.jobId === jobId) || (internshipId && app.internshipId === internshipId)
  );

  res.json(filteredApplications); // Send the filtered applications as the response
};
