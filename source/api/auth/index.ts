/** @format */

import { authStateChanged } from './authStateChanged';
import { createUserWithEmailAndPassword } from './createUserWithEmailAndPassword';
import { resetPasswordByEmail } from './resetPasswordByEmail';
import { signInWithEmailAndPassword } from './signInWithEmailAndPassword';
import { signOut } from './signOut';

export const auth = Object.freeze({
  authStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  resetPasswordByEmail,
  signOut,
});
