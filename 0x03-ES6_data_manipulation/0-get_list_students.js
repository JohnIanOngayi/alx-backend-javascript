#!/usr/bin/node

/**
 * @description This function returns an array of objects
 *
 * @returns {object[]} An array of objects containing
 *  id: number,
 *  firstName: string,
 *  location: string,
 *
 * @example
 *  let students = getStudents();
 *  console.log(students);
 *  // outputs [{id: 1, firstName: 'Guillaume', location: 'San Francisco'},
 *  //          {id: 2, firstName: 'James', location: 'Columbia'},
 *  //          {id: 5, firstName: 'Serena', location: 'San Francisco'}]
 */
export default function getListStudents() {
  const User1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const User2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const User3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  return [User1, User2, User3];
}
