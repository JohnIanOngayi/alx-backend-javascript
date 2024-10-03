/**
 * performs maths operation defined by type on two rounded arguments a and b
 *
 * @param {string} type - 'SUM' || 'SUBTRACT' || 'DIVIDE'
 * @param {any} a - The first argument
 * @param {any} b - The second argument
 * @returns {number} Result or TypeError if invalid value is passed for type
 * @throws {TypeError} - If the type is not 'SUM', 'SUBTRACT', or 'DIVIDE'.
 */
const calculateNumber = (type, a, b) => {
  switch (type) {
    case "SUM":
      return Math.round(a) + Math.round(b);
      break;

    case "SUBTRACT":
      return Math.round(a) - Math.round(b);
      break;

    case "DIVIDE":
      return Math.round(a) / Math.round(b);
      break;

    default:
      throw new TypeError("type can only be 'SUM', 'SUBTRACT', 'DIVIDE'");
      break;
  }
};
module.exports = calculateNumber;
