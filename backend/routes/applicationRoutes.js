const express = require('express');
const multer = require('multer');
const { apply, getApplications } = require('../controllers/applicationController');
const router = express.Router();

// Multer setup for resume uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('resume'), apply);
router.get('/:jobId', getApplications);

module.exports = router;
