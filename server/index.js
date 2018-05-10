const express = require('express');
const app = express();
const render = require('../src/server/render');

app.get('*', function(req, res) {
  res.status(200).send('test');
});

app.listen(9001);
