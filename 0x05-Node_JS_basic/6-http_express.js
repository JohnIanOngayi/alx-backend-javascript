#!/usr/bin/node

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!').status(200);
  res.end();
});

app.listen(1245);

module.exports = app;
