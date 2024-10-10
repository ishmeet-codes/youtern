const express = require('express');
const multer = require('multer');
const { apply, getApplications } = require('../controllers/applicationController');
const router = express.Router();

// Multer setup for resume uploads (storing in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route to submit an application with a resume
// The application can be for a job or internship
// 'upload.single('resume')' will handle the uploaded file in memory and pass it to req.file
router.post('/', upload.single('resume'), apply);

// GET route to fetch applications for a specific job by jobId
// You can also consider adding a route for fetching applications for internships
router.get('/job/:jobId', getApplications); // For job applications
router.get('/internship/:internshipId', getApplications); // For internship applications

module.exports = router;
