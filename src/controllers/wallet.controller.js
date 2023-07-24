const Wallet = require('../models/wallet.model');

module.exports = {

    add_wallet: async (req, res) => {
        //console.log(typeof(req.body.wallet_amount));
        let parseInterger = parseInt(req.body.wallet_amount);
        //console.log(typeof(parseInterger));
        try {
            await Wallet.create({
                wallet_name: req.body.wallet_name,
                wallet_amount: parseInterger,
            }).then(result => {
                res.status(200).json({ status: 200, message: 'upload data', data: result });
            });
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    },

    get_wallets: async (req, res) => {
        try {
            await Wallet.findAll().then(result => {
                res.status(200).json({ status: 200, message: 'get data complete', data: result });
            })
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    },
};