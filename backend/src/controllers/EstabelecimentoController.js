const Estabelecimento = require('../models/Estabelecimento');

module.exports = {
    async store( req, res) {
    //const { filename } = req.file;
    const { nome, email, password, foto, cnpj, endereco, telefone, obs, latitude, longitude } = req.body;
        //console.log(req.nome)
        let estabelecimento = await Estabelecimento.findOne({cnpj});

        if(!estabelecimento){

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            //const obsArray = parseStringArray(obs);

            estabelecimento = await Estabelecimento.create({ 
                //imagem: filename,
                nome, 
                email, 
                password, 
                foto, 
                endereco, 
                telefone,
                cnpj,
                obs,
                location,
            });
            

        }
        
        return res.json(estabelecimento);
    }
};