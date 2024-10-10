const { v4: uuidv4 } = require('uuid');
const { applications } = require('../utils/storage');

// Apply for a job or internship
exports.apply = (req, res) => {
  const { jobId, userId, type } = req.body;
  const resume = req.file ? req.file.buffer.toString('base64') : null; // Store resume in memory
  const application = {
    id: uuidv4(),
    jobId,
    userId,
    resume,
    type, // 'job' or 'internship'
  };
  applications.push(application);
  res.status(201).json({ message: 'Application submitted successfully' });
};

// Get applications for a specific job/internship (HR only)
exports.getApplications = (req, res) => {
  const { jobId } = req.params;
  const filteredApplications = applications.filter(app => app.jobId === jobId);
  res.json(filteredApplications);
};
