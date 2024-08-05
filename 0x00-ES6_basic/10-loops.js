export default function appendToEachArrayValue(array, appendString) {
  const wordArray = [];

  for (const idx of array) {
    wordArray.push(appendString + idx);
  }

  return wordArray;
}
