#!/usr/bin/node

/**
 * Class defines a classroom
 */
export default class Classroom {
  /**
   * instaniates a Classroom object
   * @param {number} maxStudentsSize: max no of students allowed in Classroom
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
