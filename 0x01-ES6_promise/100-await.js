#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (err) {
    console.log(err.message);
    return { photo: null, user: null };
  }
}
