/** @format */

import auth from '@react-native-firebase/auth';

import { AuthParams } from './signInWithEmailAndPassword';

export const createUserWithEmailAndPassword = async ({ email, password }: AuthParams) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};
