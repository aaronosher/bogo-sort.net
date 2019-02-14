import path from 'path';
import express from 'express';
import http from 'http';
import SocketHandler from './sockets';
import sorts from './sorts';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})
const PORT = process.env.PORT || 3030

const server = http.Server(app);

const socketHandler = new SocketHandler(server);

server.listen(PORT, () => {
    console.info(`App listening to ${PORT}....`)
    console.info('Press Ctrl+C to quit.')
    sorts(data => socketHandler.sendToAll('sort', data));
});
