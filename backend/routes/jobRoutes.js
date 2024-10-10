const express = require('express');
const { getJobs, addJob } = require('../controllers/jobController');
const { isHR } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getJobs);
router.post('/', isHR, addJob); // Only HR can add jobs

module.exports = router;
