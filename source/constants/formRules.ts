/** @format */

export const emailFromInputRule = {
  required: 'Invalid email address',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
};

export const passwordFromInputRule = {
  required: 'Invalid password',
  minLength: {
    value: 6,
    message: 'Minimum password length 6 characters',
  },
};
