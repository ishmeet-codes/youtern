const { jobs } = require('../utils/storage');

// Get all jobs
exports.getJobs = (req, res) => {
  res.json(jobs);
};

// Add a new job (HR only)
exports.addJob = (req, res) => {
  const { title, description, hrId } = req.body;
  const job = { id: uuidv4(), title, description, hrId };
  jobs.push(job);
  res.status(201).json({ message: 'Job added successfully' });
};
