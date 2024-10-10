const { internships } = require('../utils/storage');

// Get all internships
exports.getInternships = (req, res) => {
  res.json(internships); // Send back the list of internships
};

// Add a new internship (HR only)
exports.addInternship = (req, res) => {
  const { title, description, hrId } = req.body;

  // Basic validation
  if (!title || !description || !hrId) {
    return res.status(400).json({ message: 'Title, description, and HR ID are required' });
  }

  // Create a new internship object
  const internship = { id: uuidv4(), title, description, hrId };

  // Push the new internship to the in-memory storage
  internships.push(internship);

  // Respond with success message
  res.status(201).json({ message: 'Internship added successfully', internship });
};
