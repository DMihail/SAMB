/** @format */

import auth from '@react-native-firebase/auth';

export const signOut = async () => {
  try {
    await auth().signOut();
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
