/** @format */

import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { AppText } from '~/component';
import { colors, Fonts } from '~/constants';

import { CustomButtonType } from './';

export const LinkButton: FC<CustomButtonType> = ({ onPress, disabled, title, textStyle, testID }) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} testID={testID}>
      <AppText styleText={[styles.title, textStyle]}>{title}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: -0.41,
    lineHeight: 22,
    color: colors.caribbeanGreen,
  },
});
