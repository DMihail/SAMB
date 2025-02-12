/** @format */

import { authStateChanged } from './authStateChanged';
import { createUserWithEmailAndPassword } from './createUserWithEmailAndPassword';
import { signInWithEmailAndPassword } from './signInWithEmailAndPassword';
import { signOut } from './signOut';

export const auth = Object.freeze({
  authStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
});
