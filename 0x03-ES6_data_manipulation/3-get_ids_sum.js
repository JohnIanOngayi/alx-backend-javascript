#!/usr/bin/node

/**
 * function returns sum of all ids
 *
 * @returns {number} sum of all student ids
 */
export default function getStudentIdsSum(ListStudents) {
  if (!Array.isArray(ListStudents)) {
    throw new TypeError('ListStudents must be an array');
  }
  return ListStudents.reduce((total, item) => {
    if (!Number.isInteger(item.id)) {
      throw new TypeError('All student id must be integers');
    }
    return total + item.id;
  }, 0);
}
