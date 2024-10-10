const { internships } = require('../utils/storage');

// Get all internships
exports.getInternships = (req, res) => {
  res.json(internships);
};

// Add a new internship (HR only)
exports.addInternship = (req, res) => {
  const { title, description, hrId } = req.body;
  const internship = { id: uuidv4(), title, description, hrId };
  internships.push(internship);
  res.status(201).json({ message: 'Internship added successfully' });
};
