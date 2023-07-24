const Owncheck = require('../models/owncheck.model');

module.exports = {

    add_owncheck: async (req, res) => {
        //console.log(req.body);
        let length = req.body.length;
        //console.log(length);
        if (length === 1) {
            //console.log('add one');
            let body = req.body.data;
            //console.log(body);
            try {
                await Owncheck.create({
                    owncheck_name: body.owncheck_name,
                }).then(result => {
                    res.status(200).json({ status: 200, message: 'upload data', data: result });
                });
            } catch (error) {
                res.status(400).json({ status: 400, message: error });
            } 
        } else {
            console.log('add more that one');

            let body = req.body.data;            
            let data = body;
            //console.log(data);
            await Owncheck.bulkCreate(data, {
                returning: true
            }).then(result => {
                res.status(200).json({ status: 200, message: 'upload data', data: result });
            });
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