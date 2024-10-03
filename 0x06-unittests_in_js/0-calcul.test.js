#!/usr/bin/node

import calculateNumber from "./0-calcul.js";
import assert from "assert";

describe("calculateNumber takes two numbers rounds them and sums them up", function () {
  it("test calculateNumber with basic positive numbers", function () {
    assert.strictEqual(calculateNumber(1, 3), Math.round(1) + Math.round(3));
  });

  it("test calculateNumber with basic negative numbers", function () {
    assert.strictEqual(
      calculateNumber(-1, -3),
      Math.round(-1) + Math.round(-3),
    );
  });

  it("test calculateNumber with zero values", function () {
    assert.strictEqual(calculateNumber(0, 0), Math.round(0) + Math.round(0));
  });

  it("test calculateNumber with mixed sign values", function () {
    assert.strictEqual(
      calculateNumber(-1.5, +3.7),
      Math.round(-1.5) + Math.round(+3.7),
    );
  });

  it("test calculateNumber with decimal edge cases", function () {
    assert.strictEqual(
      calculateNumber(1.5, 3.5),
      Math.round(1.5) + Math.round(3.5),
    );
  });

  it("test calculateNumber with large numbers", function () {
    assert.strictEqual(
      calculateNumber(150000000.3, 2000000000.4),
      Math.round(150000000.3) + Math.round(2000000000.4),
    );
  });

  it("test calculateNumber with small numbers close to zero", function () {
    assert.strictEqual(calculateNumber(0.000001, 0.0000005), 0);
  });

  it("test calculateNumber with numbers that round to the same value", function () {
    assert.strictEqual(
      calculateNumber(1.5, 2.4),
      Math.round(1.5) + Math.round(2.4),
    );
  });

  it("test calculateNumber with applicable non-numeric inputs", function () {
    assert.strictEqual(
      calculateNumber("-1.5", "+3.7"),
      Math.round("-1.5") + Math.round("+3.7"),
    );
  });
});
