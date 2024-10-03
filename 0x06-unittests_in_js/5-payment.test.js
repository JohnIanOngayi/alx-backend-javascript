#!/usr/bin/node

const sinon = require("sinon");
const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", () => {
  const spy = sinon.spy(console, "log");

  beforeEach(() => {
    spy.resetHistory();
  });

  afterEach(() => {
    expect(spy.calledOnce).to.be.true;
  });

  function verifyOutput(totalAmount, totalShipping) {
    sendPaymentRequestToApi(totalAmount, totalShipping);
    expect(spy.calledOnce).to.be.true;
    expect(spy.getCall(0).args[0]).to.match(/The total is: \d+/);
  }

  it("should display the correct message for a large payment", () => {
    verifyOutput(100, 20);
  });

  it("should display the correct message for a small payment", () => {
    verifyOutput(10, 10);
  });
});
