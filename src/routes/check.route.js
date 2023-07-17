const express = require('express');
const router = express.Router();
const checkController = require('../controllers/check.controller');

router.post('/add-checks', checkController.add_checks);
router.post('/get-checkbymmonth', checkController.getCheckByMonth);

module.exports = router;