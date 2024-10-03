#!/usr/bin/node

const Utils = require("./utils");

/**
 * calculates invoice amount
 *
 * @param {number} totalAmount - total price amount
 * @param {number} totalShipping - total shipping amount
 * @returns {number} Sum of totalAmount and totalShipping
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const invoiceAmount = Utils.calculateNumber(
    "SUM",
    totalAmount,
    totalShipping,
  );
  console.log(`The total is: ${invoiceAmount}`);
};

module.exports = sendPaymentRequestToApi;
