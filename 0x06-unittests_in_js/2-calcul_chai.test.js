#!/usr/bin/node

const chai = require("chai");
const assert = chai.assert;

const calculateNumber = require("./2-calcul_chai");

describe("testing calculateNumber", function () {
  describe("type === 'SUM'", function () {
    it("basic positive numbers", function () {
      assert.strictEqual(
        calculateNumber("SUM", 1, 3),
        Math.round(1) + Math.round(3),
      );
    });

    it("basic negative numbers", function () {
      assert.strictEqual(
        calculateNumber("SUM", -1, -3),
        Math.round(-1) + Math.round(-3),
      );
    });

    it("zero values", function () {
      assert.strictEqual(
        calculateNumber("SUM", 0, 0),
        Math.round(0) + Math.round(0),
      );
    });

    it("mixed sign values", function () {
      assert.strictEqual(
        calculateNumber("SUM", -1.5, +3.7),
        Math.round(-1.5) + Math.round(+3.7),
      );
    });

    it("decimal edge cases", function () {
      assert.strictEqual(
        calculateNumber("SUM", 1.5, 3.5),
        Math.round(1.5) + Math.round(3.5),
      );
    });

    it("large numbers", function () {
      assert.strictEqual(
        calculateNumber("SUM", 150000000.3, 2000000000.4),
        Math.round(150000000.3) + Math.round(2000000000.4),
      );
    });

    it("small numbers close to zero", function () {
      assert.strictEqual(calculateNumber("SUM", 0.000001, 0.0000005), 0);
    });

    it("numbers that round to the same value", function () {
      assert.strictEqual(
        calculateNumber("SUM", 1.5, 2.4),
        Math.round(1.5) + Math.round(2.4),
      );
    });

    it("Infinity and Infinity", function () {
      assert.strictEqual(
        calculateNumber("SUM", Infinity, Infinity),
        Math.round(Infinity) + Math.round(Infinity),
      );
    });

    it("strings that evaluate to numbers", function () {
      assert.strictEqual(
        calculateNumber("SUM", "1.2", "6.5"),
        Math.round(1.2) + Math.round(6.5),
      );
    });

    it("NaN and Nan", function () {
      assert.isNaN(calculateNumber("SUM", "str", "str"));
    });
  });

  describe("type === 'SUBTRACT'", function () {
    it("basic positive numbers", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", 1, 3),
        Math.round(1) - Math.round(3),
      );
    });

    it("basic negative numbers", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", -1, -3),
        Math.round(-1) - Math.round(-3),
      );
    });

    it("zero values", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", 0, 0),
        Math.round(0) - Math.round(0),
      );
    });

    it("mixed sign values", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", -1.5, +3.7),
        Math.round(-1.5) - Math.round(+3.7),
      );
    });

    it("decimal edge cases", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", 1.5, 3.5),
        Math.round(1.5) - Math.round(3.5),
      );
    });

    it("large numbers", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", 150000000.3, 2000000000.4),
        Math.round(150000000.3) - Math.round(2000000000.4),
      );
    });

    it("small numbers close to zero", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 0.000001, 0.0000005), 0);
    });

    it("numbers that round to the same value", function () {
      assert.strictEqual(
        calculateNumber("SUBTRACT", 1.5, 2.4),
        Math.round(1.5) - Math.round(2.4),
      );
    });

    it("Infinity and Infinity", function () {
      assert.isNaN(calculateNumber("SUBTRACT", Infinity, Infinity));
    });

    it("strings that evaluate to numbers", function () {
      assert.strictEqual(
        calculateNumber("SUM", "1.2", "6.5"),
        Math.round(1.2) + Math.round(6.5),
      );
    });

    it("NaN and Nan", function () {
      assert.isNaN(calculateNumber("SUBTRACT", "str", "str"));
    });
  });

  describe("type === 'DIVIDE'", function () {
    it("basic positive numbers", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", 1, 3),
        Math.round(1) / Math.round(3),
      );
    });

    it("basic negative numbers", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", -1, -3),
        Math.round(-1) / Math.round(-3),
      );
    });

    it("zero values", function () {
      assert.isNaN(calculateNumber("DIVIDE", 0, 0));
    });

    it("mixed sign values", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", -1.5, +3.7),
        Math.round(-1.5) / Math.round(+3.7),
      );
    });

    it("decimal edge cases", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", 1.5, 3.5),
        Math.round(1.5) / Math.round(3.5),
      );
    });

    it("large numbers", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", 150000000.3, 2000000000.4),
        Math.round(150000000.3) / Math.round(2000000000.4),
      );
    });

    it("small numbers close to zero", function () {
      assert.isNaN(calculateNumber("DIVIDE", 0.000001, 0.0000005));
    });

    it("numbers that round to the same value", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", 1.5, 2.4),
        Math.round(1.5) / Math.round(2.4),
      );
    });

    it("Infinity and Infinity", function () {
      assert.isNaN(calculateNumber("DIVIDE", Infinity, Infinity));
    });

    it("strings that evaluate to numbers", function () {
      assert.strictEqual(
        calculateNumber("DIVIDE", "1.2", "6.5"),
        Math.round(1.2) / Math.round(6.5),
      );
    });

    it("NaN and Nan", function () {
      assert.isNaN(calculateNumber("DIVIDE", "str", "str"));
    });
  });
});
