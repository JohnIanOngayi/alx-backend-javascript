#!/usr/bin/node

import Currency from './3-currency';

/**
 * class defines pricing
 */
export default class Pricing {
  /**
   * instaniates a Pricing object
   * @param {number} amount: amount
   * @param {Currency} currency: currency used
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * returns amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * sets amount
   * @param {number} value: new amount
   */
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Value must be a number');
    }
  }

  /**
   * returns currency
   */
  get currency() {
    return this._currency;
  }

  /**
   * sets currency
   * @param {Currency} value: new currency
   */
  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Must be a Currency');
    }
  }

  /**
   *returns string rep for pricing
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * returns currency conversion
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
