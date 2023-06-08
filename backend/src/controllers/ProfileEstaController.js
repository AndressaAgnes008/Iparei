//const { index } = require("../models/utils/PointSchema");

const Est = require('../models/Estabelecimento');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res){
        // busca estabelecimentos num raio de 20km.
        //console.log(req.query);

        const { _id } = req.query;

        const estas = await Est.find({
            _id: {
                $in: _id,
            },
        });

        return res.json({ estas });
    }
}