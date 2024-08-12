#!/usr/bin/node

/**
 * function retunrs a set from an array
 *
 * @param {Array} array : array to be converted to set
 * @returns {Set} returns set from array
 */
export default function (array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  return new Set(array);
}
