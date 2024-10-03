const sinon = require("sinon");
const Utils = require("./utils");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi uses the calculateNumber method of Utils", () => {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;
    expect(stub.getCall(0).returnValue).to.equal(10);
    stub.restore();
  });
});
