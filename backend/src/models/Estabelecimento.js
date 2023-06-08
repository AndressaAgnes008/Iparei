const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const EstaSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    email: String,
    cnpj: String,
    foto: String,
    password: String,
    telefone: String,
    obs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
        coordinates: [Number, Number],
    }
});

module.exports = mongoose.model('Estabelecimento', EstaSchema);