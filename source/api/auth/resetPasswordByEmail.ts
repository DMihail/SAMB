/** @format */

import auth from '@react-native-firebase/auth';

type ResetPasswordByEmailProps = {
  email: string;
};

export const resetPasswordByEmail = async ({ email }: ResetPasswordByEmailProps) => {
  try {
    await auth().sendPasswordResetEmail(email);
  } catch (error) {
    console.error(error);
  }
};
