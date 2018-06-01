import express from 'express';
import ssr from './ssr';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../dist')));

/*
app.use(express.static(path.join(__dirname, '../dist/index.html')));

const staticFiles = ['/*.js'];

staticFiles.forEach(file => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../dist', req.url);
    res.sendFile(filePath);
  });
});
*/

app.get('*', async (req, res, next) => {
  const template = path.join(__dirname, '../dist/index.html');
  const beforeRenderHtml = fs.readFileSync(template).toString();

  /* const { html, ttRenderMs } = await ssr({
    url: `${req.protocol}://${req.get('host')}`,
    pathname: req.url
  });

  res.set(
    'Server-Timing',
    `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`
  ); */

  return res.status(200).send(beforeRenderHtml);
});

app.listen(9001, () => console.log('Server started. Press Ctrl+C to quit'));
