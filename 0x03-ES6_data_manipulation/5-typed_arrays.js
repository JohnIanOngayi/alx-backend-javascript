#!/usr/bin/node

/**
 * function returns new ArrayBuffer with int8 value at specified position
 *
 * @returns {ArrayBuffer} returns new ArrayBuffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8view = new DataView(buffer);
  int8view.setInt8(position, value);
  return int8view;
}
