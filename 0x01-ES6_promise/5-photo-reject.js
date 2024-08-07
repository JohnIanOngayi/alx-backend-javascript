#!/usr/bin/node

// export default function uploadPhoto(filename) {
//   return new Promise((resolve, reject) => {
//     reject(`${filename} cannot be processed`);
//   });
// }
//
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
