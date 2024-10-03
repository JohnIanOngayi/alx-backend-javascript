#!/usr/bin/node

const express = require("express");
const request = require("request");

const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to the payment system").status(200);
});

app.get("/cart/:id(\\d+)", (request, response) => {
  const { id } = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () => console.log("API available on localhost port 7865"));

module.exports = app;
