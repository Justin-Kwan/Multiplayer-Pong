'use strict';

class SocketEmitter {

  createConnection() {
    let socket = io.connect('http://127.0.0.1:5000');
    socket.on('connect', function() {
  	  socket.send('Player connected!');
      return socket;
  	});

  }

  emitOnUpArrowKeyStroke(socket) {

    socket.send('UP');

  }

  emitOnDownArrowKeyStroke(socket) {

    socket.send('DOWN');

  }



}
