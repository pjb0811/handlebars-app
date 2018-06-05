import fs from 'fs';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.prod.js';
// import renderApp from "../src";

const app = express();
const PORT = 9001;
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: '/'
  })
);

app.get('*', async (req, res, next) => {
  const template = path.join(__dirname, '../dist/index.html');
  const beforeRenderHtml = fs.readFileSync(template).toString();

  return res.status(200).send(beforeRenderHtml);
  // res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// server.get('*', async (req, res, next) => {
//   const template = path.join(__dirname, '../dist/index.html');
//   const beforeRenderHtml = fs.readFileSync(template).toString();

//   // const { html, ttRenderMs } = await ssr({
//   //   url: `${req.protocol}://${req.get('host')}${req.url}`,
//   //   pathname: req.url
//   // });

//   // res.set(
//   //   'Server-Timing',
//   //   `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
//   // );

//   return res.status(200).send(beforeRenderHtml);
// });

app.listen(PORT);

// import express from 'express';
// import fs from 'fs';
// import path from 'path';

// const server = express();
// const webpack = require('webpack');

// server.use(express.static(path.join(__dirname, '../dist')));

/*
server.use(express.static(__dirname + '/dist'));

const staticFiles = ['/*.js'];

staticFiles.forEach(file => {
  server.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../dist', req.url);
    res.sendFile(filePath);
  });
});
*/

// server.get('*', async (req, res, next) => {
//   const template = path.join(__dirname, '../dist/index.html');
//   const beforeRenderHtml = fs.readFileSync(template).toString();

//   // const { html, ttRenderMs } = await ssr({
//   //   url: `${req.protocol}://${req.get('host')}${req.url}`,
//   //   pathname: req.url
//   // });

//   // res.set(
//   //   'Server-Timing',
//   //   `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
//   // );

//   return res.status(200).send(beforeRenderHtml);
// });

// server.listen(9001, () => console.log('Server started. Press Ctrl+C to quit'));
