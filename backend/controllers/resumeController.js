const { users, jobs, internships, applications, mentors } = require('../utils/storage');


// Retrieve resume for a specific application
exports.getResume = (req, res) => {
  const { applicationId } = req.params;
  const application = applications.find(app => app.id === applicationId);
  if (!application || !application.resume) {
    return res.status(404).json({ message: 'Resume not found' });
  }
  res.json({ resume: application.resume });
};
