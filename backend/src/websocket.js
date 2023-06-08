const { connection } = require('mongoose');
const socketio = require('socket.io');
const calculateDistance = require('./utils/calculateDistance'); 

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        
        const { latitude, longitude, endereco } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            endereco: endereco,
        });
    });
};

exports.findConnections = (coordinates, endereco) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 20
        && connection.endereco
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    })
}