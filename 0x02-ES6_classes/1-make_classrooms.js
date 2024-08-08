#!/usr/bin/node

import Classroom from './0-classroom.js';

export default function initializeRooms() {
  const classrooms = [];
  classrooms.push(new Classroom(19), new Classroom(20), new Classroom(34));
  return classrooms;
}
