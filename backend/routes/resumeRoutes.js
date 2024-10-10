const express = require('express');
const { getResume } = require('../controllers/resumeController');
const router = express.Router();

router.get('/:applicationId', getResume);

module.exports = router;
