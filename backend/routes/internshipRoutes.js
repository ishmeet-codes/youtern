const express = require('express');
const { getInternships, addInternship } = require('../controllers/internshipController');
const { isHR } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getInternships);
router.post('/', isHR, addInternship); // Only HR can add internships

module.exports = router;
