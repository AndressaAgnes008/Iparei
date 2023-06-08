const axios = require('axios');
const Est = require('../models/Estabelecimento');
//const { index } = require('../models/utils/PointSchema');
//const { response } = require('express');
const parseStringArray = require('../utils/parseStringArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {

     async index(req, res) {
         const estas = await Est.find();
console.log(estas)
         return res.json(estas);
     },

     async indexLogin(req, res){
       // console.log(req.query);

        const { email } = req.query;

        const estas = await User.find({
            email: {
                $in: email,
            },
            // password: {
            //     $in: password,
            // },
        });

        return res.json(estas);
    },


    async store(req, res) {
        
        const { nome, endereco, email, cnpj, foto, obs, latitude, longitude } = req.body;
        
        let esta = await Est.findOne({ cnpj });

        if(!esta)
        {
            //const apiRes = await axios.get(`https://api.github.com/users/${nome}`);
    
            //console.log(req.body);
            //console.log(apiRes.data);
        
            //const { name = login, bio } = apiRes
            // pegar a latitude e longitude pelo cep
            //https://maps.googleapis.com/maps/api/geocode/json?address=06616110&key=AIzaSyBI3uZPiC7LwFQ-Rx0xqidkwI1CV6MsvfI
        
            const obsArray = parseStringArray(obs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            esta = await Est.create({
                nome, 
                endereco,
                email,
                cnpj,
                foto,
                obs: obsArray,
                location,
            });


            // filtrar conexões que estão dentro do campo de distancia do usuario.

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                endereco,
            )

            sendMessage(sendSocketMessageTo, 'new-esta', esta);
        }

        
    
        return res.json(esta);
    }
};