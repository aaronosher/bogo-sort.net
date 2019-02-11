import path from 'path'
import express from 'express'
import http from 'http'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import SocketHandler from './sockets';
import sorts from './sorts';

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})
const PORT = process.env.PORT || 8080

const server = http.Server(app);

const socketHandler = new SocketHandler(server);

server.listen(PORT, () => {
    console.info(`App listening to ${PORT}....`)
    console.info('Press Ctrl+C to quit.')
    sorts(data => socketHandler.sendToAll('sort', data));
});
