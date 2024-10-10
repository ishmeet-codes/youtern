const express = require('express');
const { getInternships, addInternship } = require('../controllers/internshipController');
const router = express.Router();

// GET route to fetch all internships
router.get('/', getInternships);

// POST route to add a new internship
router.post('/', addInternship); // Ensure HR adds the internship

module.exports = router;
