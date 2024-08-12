#!/usr/bin/node

/**
 * function fetches objects by locaton
 *
 * @param {listStudents} list of student objects
 * @param {city} city to match
 * @returns {Array} an array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents) || typeof city !== 'string') {
    return [];
  }
  const studentsByLoc = listStudents.filter((value) => value.location === city);
  return studentsByLoc;
}
