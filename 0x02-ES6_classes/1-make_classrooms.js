#!/usr/bin/node

import Classroom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [new Classroom(19), new Classroom(20), new Classroom(34)];
  return classrooms;
}
