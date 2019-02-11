import SocketIO from 'socket.io'

class SocketHandler {

  constructor(server) {
    this.sockets = {}
    this.io = SocketIO(server);
    this.io.on('connection', this.addConnection)
  }

  addConnection = socket => {
    this.sockets[socket.id] = socket;
    socket.on('disconnect', this.removeConnection(socket.id))
  }

  removeConnection = id => () => {
    delete this.sockets[id];
  }

  sendToAll = (event, data) => {
    for (const socket of Object.values(this.sockets)) {
      socket.emit(event, data);
    }
  }

  sendTo = id => (event, data) => {
    if (!this.sockets[id])
      throw Error("Socket not found");

    this.sockets[id].emit(event, data);
  }

}

export default SocketHandler;
