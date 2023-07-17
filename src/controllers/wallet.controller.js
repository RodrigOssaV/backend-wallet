const Wallet = require('../models/wallet.model');

module.exports = {

    add_wallet: (request, response) => {
        response.status(200).json({ status: 200, message: request.body});
    }
};