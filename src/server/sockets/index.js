import SocketIO from 'socket.io'

class SocketHandler {

  constructor(server) {
    this.sockets = {}
    this.io = SocketIO(server);
    this.io.on('connection', this.addConnection)
    this.data = [];
    this.event = "";
  }

  addConnection = socket => {
    this.sockets[socket.id] = socket;
    socket.emit(this.event, this.data);
    socket.on('disconnect', this.removeConnection(socket.id))
  }

  removeConnection = id => () => {
    delete this.sockets[id];
  }

  sendToAll = (event, data) => {
    this.data = data;
    this.event = event;
    for (const socket of Object.values(this.sockets)) {
      socket.emit(event, data);
    }
  }

  sendTo = id => (event, data) => {
    this.data = data;
    this.event = event;
    if (!this.sockets[id])
      throw Error("Socket not found");

    this.sockets[id].emit(event, data);
  }

}

export default SocketHandler;
