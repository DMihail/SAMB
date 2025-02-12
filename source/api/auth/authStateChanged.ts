/** @format */

import auth from '@react-native-firebase/auth';

export const authStateChanged = () =>
  new Promise((resolve) => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      resolve(user);
      unsubscribe();
    });
  });
