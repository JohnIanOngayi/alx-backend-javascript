#!/usr/bin/node

/**
 * function returns an array of students for city with their new grade
 * @param {Object} listStudents: list of student objects
 * @param {String} city: city to match
 * @param {Object} newGrades: list of new grades
 * @returns{list} array of students with new grade
 */
export default function (listStudents, city, newGrades) {
  return listStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id,
      );
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
