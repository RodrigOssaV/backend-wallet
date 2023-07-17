const express = require('express');
const router = express.Router();
const serviceControllers = require('../controllers/service.controller');

router.post('/add-service', serviceControllers.add_service);
router.get('/get-services', serviceControllers.get_services);
router.post('/add-services', serviceControllers.add_services);

module.exports = router;