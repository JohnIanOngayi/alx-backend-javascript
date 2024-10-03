#!/usr/bin/node

const express = require("express");
const request = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Welcome to the payment system").status(200);
});

app.get("/cart/:id(\\d+)", (request, response) => {
  const { id } = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (request, response) => {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (request, response) => {
  const { userName } = request.body;
  response.send(`Welcome ${userName}`);
});

app.listen(7865, () => console.log("API available on localhost port 7865"));

module.exports = app;
