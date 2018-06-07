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

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.dev.js';
const compiler = webpack(config);

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

function normalizeAssets(assets) {
  return Array.isArray(assets) ? assets : [assets];
}

app.get('*', async (req, res, next) => {
  const template = path.join(__dirname, '../dist/index.html');
  const beforeRenderHtml = fs.readFileSync(template).toString();
  console.log(req.url);

  // const url = `${req.protocol}://${req.get('host')}${req.url}`;
  // const { html, ttRenderMs } = await ssr({ url });

  res.status(200).send(beforeRenderHtml);

  /*
  let assets = res.locals.webpackStats.toJson().assetsByChunkName;
  assets = typeof assets === 'string' ? { app: assets } : assets;
  assets = Array.isArray(assets) ? assets : Object.values(assets);

  let js = assets.filter(
    path => String(path.split('.').pop()).toLowerCase() === 'js'
  );

  res.send(`
  <html>
    <head>
      <title>Webpack - Express</title>
    </head>
    <body>
      <div id="root"></div>
      ${js.map(path => `<script src="${path}"></script>`).join('\n')}
    </body>
  </html>
  `);
  */
});

server.listen(PORT);
