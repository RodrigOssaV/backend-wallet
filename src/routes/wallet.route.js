const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');

router.post('/add-wallet', walletController.add_wallet);
router.get('/get-wallets', walletController.get_wallets);

module.exports = router;