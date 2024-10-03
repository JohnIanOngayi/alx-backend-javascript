#!/usr/bin/node

/**
 * returns sum of a and b
 *
 * @param {any} a - The first argument
 * @param {any} b - The second argument
 * @returns {number} Result or TypeError if invalid value is passed for type
 */
const calculateNumber = (a, b) => Math.round(a) + Math.round(b);

export default calculateNumber;
