import express from 'express';
import expressHbs from 'express-handlebars';
import renderApp from '../src';

const app = express();

app.get('*', function(req, res) {
  res.status(200).send(req.url);
  // res.render();
});

app.listen(9001);
