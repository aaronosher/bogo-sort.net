import path from 'path';
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import './sorts';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})
const PORT = process.env.PORT || 8080

const server = http.Server(app);

server.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})

const io = SocketIO(server);

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
