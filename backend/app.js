const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors'); // Import cors

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Setup routes
app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);
app.use('/internships', internshipRoutes);
app.use('/applications', applicationRoutes);
app.use('/mentors', mentorRoutes);
app.use('/resume', resumeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
