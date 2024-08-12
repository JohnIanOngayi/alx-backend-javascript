#!/usr/bin/node

/**
 * function returns an updated map
 *
 * @param {Map} map: original map to be iterated
 * @returns {Map} map for all items with initial quantity 1
 */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
