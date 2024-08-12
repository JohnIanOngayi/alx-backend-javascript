#!/usr/bin/node

/**
 * function returns an array of id's from an array of objects
 *
 * @returns (list) List of student id's
 */
export default function getListStudentIds(studentObjs) {
  if (!Array.isArray(studentObjs)) {
    return [];
  }
  const studentIds = studentObjs.map((value) => value.id);
  return studentIds;
}
