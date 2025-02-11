/** @format */

import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Controller, RegisterOptions } from 'react-hook-form';

import { AppText } from '~/component';
import { colors, Fonts } from '~/constants';

export interface InputProps extends TextInputProps {
  control: any;
  name: string;
  title: string;
  rules?: RegisterOptions;
  error?: string;
  placeholder?: string;
}

export const FormTextInput: FC<InputProps> = ({ control, rules, name, error, title, ...props }) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCorrect={false}
            autoCapitalize={'none'}
            style={[styles.input, !!error?.length && styles.error]}
            {...props}
          />
          <AppText styleText={styles.title}>{title}</AppText>
          {!!error?.length && <AppText styleText={styles.errorText}>{error}</AppText>}
        </View>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.LatoBold,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 700,
    color: colors.nero,
    position: 'absolute',
    top: -10,
    left: 16,
    backgroundColor: colors.white,
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.white,
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
    fontWeight: 400,
    borderWidth: 1,
    borderColor: colors.neroOpacity,
    color: colors.nero,
  },
  error: {
    borderColor: colors.red,
  },
  errorText: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 400,
    color: colors.red,
    paddingTop: 5,
  },
});
