const axios = require('axios');
const User = require('../models/Usuario');
//const { index } = require('../models/utils/PointSchema');
//const { response } = require('express');
const parseStringArray = require('../utils/parseStringArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {

     async index(req, res){
        //console.log(req.query);

        const { email } = req.query;

        const usuario = await User.find({
            email: {
                $in: email,
            },
            // password: {
            //     $in: password,
            // },
        });

        return res.json(usuario);
    },

    async indexBuscarUser(req, res){
        

        try{
            //console.log(req.query);

            const { _id } = req.query;
            if(_id != ""){
                const usuario = await User.find({
                    _id: {
                        $in: _id,
                    },
                    // password: {
                    //     $in: password,
                    // },
                });
                return res.json({usuario});
            }
            
    
            
        }
        catch(error){
            console.log(error)
        }
    }, 

     
    async store(req, res) {
        
        const { nome, CPF, telefone, email, password, foto } = req.body;
        
        let usuario = await User.findOne({ CPF });

        if(!usuario)
        {
            //const apiRes = await axios.get(`https://api.github.com/users/${nome}`);
    
            //console.log(req.body);
            //console.log(apiRes.data);
        
            //const { name = login, bio } = apiRes
            // pegar a latitude e longitude pelo cep
            //https://maps.googleapis.com/maps/api/geocode/json?address=06616110&key=AIzaSyBI3uZPiC7LwFQ-Rx0xqidkwI1CV6MsvfI
        
            //const obsArray = parseStringArray(obs);
            
            // const location = {
            //     type: 'Point',
            //     coordinates: [longitude, latitude],
            // };
        
            usuario = await User.create({
                nome, 
                CPF,
                telefone,
                email,
                password,
                foto,
            });


            // filtrar conexões que estão dentro do campo de distancia do usuario.

            const sendSocketMessageTo = findConnections(
                nome,
            )

            sendMessage(sendSocketMessageTo, 'new-usuario', usuario);
        }

        
    
        return res.json(usuario);
    }
};