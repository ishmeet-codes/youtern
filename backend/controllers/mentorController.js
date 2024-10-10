const { v4: uuidv4 } = require('uuid');
const { mentors } = require('../utils/storage');

// Add a new mentor
exports.addMentor = (req, res) => {
  const { name, field, description } = req.body;
  const mentor = { id: uuidv4(), name, field, description };
  mentors.push(mentor);
  res.status(201).json({ message: 'Mentor added successfully' });
};

// Get all mentors
exports.getMentors = (req, res) => {
  res.json(mentors);
};
