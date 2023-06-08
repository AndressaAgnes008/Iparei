const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    CPF: String,
    telefone: String,
    email: String,
    password: String,
    foto: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);