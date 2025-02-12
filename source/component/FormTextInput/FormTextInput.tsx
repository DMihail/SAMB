/** @format */

import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Control, Controller, FieldValues, RegisterOptions, Path } from 'react-hook-form';

import { AppText } from '~/component';
import { colors, Fonts } from '~/constants';

export interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  title: string;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  error?: string;
  placeholder?: string;
}

export const FormTextInput = <T extends FieldValues>({
  control,
  rules,
  name,
  error,
  title,
  ...props
}: InputProps<T>) => {
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
            clearTextOnFocus={false}
            autoCapitalize={'none'}
            placeholderTextColor={colors.darkGray}
            style={[styles.input, !!error?.length && styles.error]}
            {...props}
          />
          {!!title && <AppText styleText={[styles.title, !!error && styles.errorColor]}>{title}</AppText>}
          <AppText styleText={styles.errorText}>{!!error ? error : ''}</AppText>
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
    color: colors.blackOpacity,
    position: 'absolute',
    top: -10,
    left: 13,
    backgroundColor: colors.white,
    paddingHorizontal: 3,
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
    width: '100%',
  },
  error: {
    borderColor: colors.red,
  },
  errorText: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400,
    color: colors.red,
  },
  errorColor: {
    color: colors.red,
  },
});
