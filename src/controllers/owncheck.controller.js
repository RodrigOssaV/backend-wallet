const Owncheck = require('../models/owncheck.model');

module.exports = {

    add_owncheck: async (req, res) => {
        //console.log(req.body);
        try {
            await Owncheck.create({
                owncheck_name: req.body.owncheck_name,
            }).then(result => {
                res.status(200).json({ status: 200, message: 'upload data', data: result });
            });
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }        
    },

    get_all_ownchecks: async (req, res) => {
        try {
            await Owncheck.findAll().then(result => {
                res.status(200).json({ status: 200, message: 'get all data', data: result });
            })
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    }

}