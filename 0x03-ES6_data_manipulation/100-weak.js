#!/usr/bin/node

export const weakMap = new WeakMap();

/**
 * function keeps traxk of how many times a particular endpoint is hit
 *        using a WeakMap, if the value exceeds 5 an error is thrown
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
