import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');
socket.on('news', function (data) {
  console.info(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('sort', data => console.info(data));

const logMessage = msg => socket.emit('log', msg);
export default logMessage