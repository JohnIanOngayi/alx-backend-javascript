#!/usr/bin/node

export default class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    //   throw new Error(
    //     `Building is an abstract class and cannot be instaniated directly`,
    //   );
    // }
    this.sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('evacuationWarningMessage method must be implemented');
    }
  }
}
