const express = require('express');
const router = express.Router();
const ownCheckController = require('../controllers/owncheck.controller');

router.post('/add-owncheck', ownCheckController.add_owncheck);
router.get('/get-all-owncheck', ownCheckController.get_all_ownchecks);

module.exports = router;