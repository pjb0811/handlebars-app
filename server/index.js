import express from 'express';
import expressHbs from 'express-handlebars';
import renderApp from '../src';

const app = express();

app.get('*', async function(req, res) {
  const renderString = renderApp.getString();
  res.status(200).send(renderString);
  /* renderApp
    .renderRoutePage({
      pathname: req.url
    })
    .then(str => {
      res.status(200).send(str);
    }); */
});

app.listen(9001);
