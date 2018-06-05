import fs from 'fs';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.prod.js';
import routes from '../src/lib/routes';
import Server from '../src/modules/Server';

const server = express();
const PORT = 9001;
const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: '/'
  })
);

/*
server.use(express.static(path.join(__dirname, '../dist/index.html')));
const staticFiles = ['/*.js'];
staticFiles.forEach(file => {
  server.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../dist', req.url);
    res.sendFile(filePath);
  });
});
*/

server.get('*', async (req, res, next) => {
  const template = path.join(__dirname, '../dist/index.html');
  const beforeRenderHtml = fs.readFileSync(template).toString();
  const app = new Server({
    el: '#root',
    routes,
    pathname: req.url
  });

  return res.status(200).send(beforeRenderHtml);
});

server.listen(PORT);

/*
const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: '/'
  })
);
*/

// server.use(express.static(path.join(__dirname, '../dist')));
