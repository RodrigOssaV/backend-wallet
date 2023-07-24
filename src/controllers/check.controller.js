const Check = require('../models/check.model');

module.exports = {

    add_checks: async (req, res) => {
        console.log(req.body);
        let length = req.body.length;
        console.log(length);
        if(length  === 1){
            //console.log('add one');
            let body = req.body[0];
            console.log(body);
            let integer = parseInt(body.check_value);
            //console.log(integer);
            try {
                await Check.create({
                    check_month: body.check_month,
                    check_value: integer,
                    check_owncheck: body.check_owncheck,
                    check_service: body.check_service,
                    id_wallet: body.id_wallet,
                    id_service: body.id_service,
                    id_owncheck: body.id_owncheck
                }).then(result => {
                    res.status(200).json({ status: 200, message: 'upload data', data: result });
                });
            } catch (error) {
                res.status(400).json({ status: 400, message: error });
            }
        }else{
            //console.log('more than one');
            //console.log(req.body.data);
            let body = req.body.data;
            for(let item of body){
                item.check_value = parseInt(item.check_value);
                //console.log(item);
            }
            //console.log(body);
            let data = body;
            //console.log(data);
            try {
                await Check.bulkCreate(data, {
                    returning: true
                }).then(result => {
                    res.status(200).json({ status: 200, message: 'upload array data', data: result });
                })
            } catch (error) {
                res.status(400).json({ status: 400, message: error });
            }
        }
    },

    getCheckByMonth: async (req, res) => {
        //console.log(req.body);
        let check_service = req.body.to_search_name;
        try {
            await Check.findAndCountAll({
                where: {check_service}
            }).then(result => {
                res.status(200).json({ status: 200, message: 'get data complete', data: result });
            })
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    }
};