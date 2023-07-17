const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');

router.post('/add-wallet', walletController.add_wallet);

module.exports = router;