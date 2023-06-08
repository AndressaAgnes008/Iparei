import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.103:3333', {
    autoConnect: false,
});

function subscribeToNewEsta(subscribeFunction){
    socket.on('new-esta', subscribeFunction);
}

function subscribeToNewHist(subscribeFunction){
    socket.on('new-hist', subscribeFunction);
}

function connect(latitude, longitude, endereco){
    socket.io.opts.query = {
        latitude, longitude, endereco
    };

    socket.connect();

    socket.on('message', text => {
        console.log(text);
    });
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewEsta,
};