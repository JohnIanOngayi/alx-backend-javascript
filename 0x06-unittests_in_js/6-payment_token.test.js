#!/usr/bin/node

const { expect } = require("chai");
const { describe, it } = require("mocha");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("return a resolved promise with successful response when success is true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: "Successful response from the API",
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it("nothing when success is false", () => {
    expect(getPaymentTokenFromAPI(false)).to.be.an("undefined");
  });
});
