const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const HistoricoSchema = new mongoose.Schema({
    idEstacionamento: String,
    idUsuario: String,
    tempo: String,
    valor: String,
    nome: String, 
    endereco: String,
    foto: String,

});

module.exports = mongoose.model('Historico', HistoricoSchema);