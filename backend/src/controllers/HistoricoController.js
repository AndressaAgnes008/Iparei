const Historico = require('../models/Historico');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
    async index(req, res){
        //console.log(req.query);

        const { idUsuario } = req.query;

        const hist = await Historico.find({
            idUsuario: {
                $in: idUsuario,
            },
        });

        return res.json({ hist });
    },

    async store(req, res) {
        
        const { idEstacionamento, idUsuario, tempo, valor, nome, endereco, foto } = req.body;
    
            //console.log(req.body);

            hist = await Historico.create({
                idEstacionamento, 
                idUsuario,
                tempo,
                valor,
                nome,
                endereco,
                foto,
            });

        return res.json(hist);
    }

};