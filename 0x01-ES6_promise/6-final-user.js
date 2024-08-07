#!/usr/bin/node

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignUp(
  firstName,
  lastName,
  fileName,
) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  const data = await Promise.allSettled([p1, p2]).then((results) =>
    results.map((result) => {
      if (result.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: result.reason.toString(),
        };
      }
      return result;
    }),
  );

  return Promise.resolve(data);
}
