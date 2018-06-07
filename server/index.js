import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';

// import routes from '../src/lib/routes';
// import Server from '../src/modules/Server';
// import ssr from './ssr';

const app = express();
const server = http.createServer(app);
const PORT = 9001;

// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import config from '../webpack.dev.js';
// const compiler = webpack(config);

/* app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/bundles/',
    index: '/bundles/'
  })
); */

// app.use(express.static('dist/bundles'));
// app.use(express.static(path.join(__dirname, "../dist/index.html")));

const staticFiles = ['/bundles/*'];
staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../dist', req.url);
    res.sendFile(filePath);
  });
});

app.get('*', async (req, res, next) => {
  const template = path.join(__dirname, '../dist/index.html');
  const beforeRenderHtml = fs.readFileSync(template).toString();
  console.log(req.url);

  res.status(200).send(beforeRenderHtml);
});

server.listen(PORT);
