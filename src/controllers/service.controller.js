const Service = require('../models/service.model');

module.exports = {
    add_service: async (request, response) => {
        try {
            await Service.create({
                service_name: request.body.service_name,
                service_nro_client: request.body.service_nro_client,
                service_type: request.body.service_type
            }).then(result => {
                response.status(200).json({ status: 200, message: 'upload data', data: result });
            });
        } catch (error) {
            response.status(400).json({ status: 400, message: error });
        }        
    },

    get_services: async (req, res) => {
        try {
            await Service.findAll().then(result => {
                res.status(200).json({ status: 200, message: 'get data complete', data: result });
            })
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    },

    add_services: async (req, res) => {
        //res.status(200).json({ status: 200, message: req.body });
        //console.log(req.body);
        try {
            await Service.bulkCreate(req.body, {
                returning: true
            }).then(result => {
                res.status(200).json({ status: 200, message: 'upload array data', data: result });
            })
        } catch (error) {
            res.status(400).json({ status: 400, message: error });
        }
    }
};