#!/usr/bin/node

/**
 * function returns an array of objects
 *
 * @returns (List) List of objecs`
 */
export default function getListStudents() {
  const User1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const User2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const User3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  return [User1, User2, User3];
}
