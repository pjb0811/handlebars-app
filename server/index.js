const express = require('express');
const app = express();
// const render = require('../src/server/render');

app.get('*', function(req, res) {
  // console.log(req, res);
  res.status(200).send(req);
});

app.listen(9001);
