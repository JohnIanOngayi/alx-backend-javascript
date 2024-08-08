#!/usr/bin/node

/**
 * class defines a Currency
 */
export default class Currency {
  /**
   * instaniates a Currency object
   * @param {string} code: currency's code
   * @param {string} name: currency's name
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * returns Currency code
   */
  get code() {
    return this._code;
  }

  /**
   * sets currency code to value
   * @param {string} value: new Currency code
   */
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  /**
   * returns Currency name
   */
  get name() {
    return this._name;
  }

  /**
   * sets currency name to value
   * @param {string} value: new Currency name
   */
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * returns attributes of the currency
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
