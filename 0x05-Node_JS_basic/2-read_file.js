#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const rows = data.split('\n').filter((row) => row); // Filter out empty lines

    if (rows.length <= 1) {
      throw new Error('No students found in the database');
    }

    const studentsByField = {};
    rows.forEach((row) => {
      const [firstname, lastname, age, field] = row.split(',');
      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    const totalStudents = rows.length;
    console.log(`Number of students: ${totalStudents - 1}`);

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const fieldStudents = studentsByField[field];
        console.log(
          `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`,
        );
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;
