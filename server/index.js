import http from 'http';
import fs from 'fs';
import path from 'path';
import express from 'express';

import routes from '../src/lib/routes';
import Server from '../src/modules/Server';
// import ssr from "./ssr";

const app = express();
const server = http.createServer(app);
const PORT = 9001;

// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import config from '../webpack.dev.js';
// const compiler = webpack(config);

/* app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: '/'
  })
); */

// app.use(express.static('dist'));
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
  const html = fs.readFileSync(template).toString();
  // const url = `${req.protocol}://${"localhost:9001"}${req.url}`;
  // const { html, ttRenderMs } = await ssr({ url });
  // const serverApp = new Server({
  //   el: '#root',
  //   routes,
  //   pathname: req.url
  // });
  res.status(200).send(html);
});

server.listen(PORT);
