const { index } = require("../models/utils/PointSchema");

const Est = require('../models/Estabelecimento');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res) {
        try {
            // busca estabelecimentos num raio de 20km.



            //console.log(req.query);

            const { latitude, longitude, endereco } = req.query;

            const estas = await Est.find({
                location: {
                    $nearSphere: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [latitude, longitude],

                        },
                        $maxDistance: 15000,
                    }
                },
                endereco: {
                    $regex: endereco,
                },
            });
            //console.log(estas)
            return res.json({ estas });
        }
        catch (error) {
            console.log("Erro Search: " + error)
        }

    }
}