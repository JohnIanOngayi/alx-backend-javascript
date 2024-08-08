#!/usr/bin/node

/**
 * class defines a Holberton Course
 */
export default class HolbertonCourse {
  /**
   * instaniates a HolbertonCourse object
   *
   * @param {string} name: the name of the course
   * @param {number} length: the length of the course
   * @param {array} students: students taking the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Returns the name of the HolbertonCourse object
   */
  get name() {
    return this._name;
  }

  /**
   * Sets name to value
   * @param {string} value: new name
   */
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * Returns the length of the HolbertonCourse object
   */
  get length() {
    return this._length;
  }

  /**
   * Sets length to value
   * @param {number} value: new length
   */
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * Returns the students of the HolbertonCourse object
   */
  get students() {
    return this._students;
  }

  /**
   * Sets students to value
   * @param {number} value: new students
   */
  set students(value) {
    value.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = value;
  }
}
