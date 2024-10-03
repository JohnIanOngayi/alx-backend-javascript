#!/usr/bin/node

const { expect } = require("chai");
const { describe, it } = require("mocha");
const request = require("request");

const url = "http://localhost:7865";

describe("Payment API Integration", () => {
  describe("GET /", () => {
    it("should have a body", (done) => {
      request(url, (error, response) => {
        expect(response.body).to.not.be.an("undefined");
        done();
      });
    });

    it("statusCode 200", (done) => {
      request(url, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("correct message", () => {
      request(url, (error, response) => {
        expect(response.body).to.equal("Welcome to the payment system");
      });
    });
  });
});
