#!/usr/bin/node

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to the payment system").status(200);
});

app.listen(7865, () => console.log("API available on localhost port 7865"));

module.exports = app;
