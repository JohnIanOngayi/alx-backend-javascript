#!/usr/bin/node

/**
 * functions returns a boolean if elements in array exist in set
 *
 * @param {Set} set: set to be searched in
 * @param {Array} array: array of values to be searched for
 * @returns {boolean} returns if union exists between array and set
 */
export default function (set, array) {
  return array.every((element) => set.has(element));
}
