/** @format */

import React, { FC } from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';

import { AppText } from '~/component';
import { colors, Fonts } from '~/constants';

import { CustomButtonType } from './';

export const SolidButton: FC<CustomButtonType> = ({ onPress, disabled, title, isLoading, textStyle, testID }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled]}
      testID={testID}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} size={'large'} />
      ) : (
        <AppText styleText={[styles.title, textStyle]}>{title}</AppText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.caribbeanGreen,
    paddingVertical: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 700,
    fontFamily: Fonts.LatoBold,
  },
  disabled: {
    backgroundColor: colors.caribbeanGreenOpacity,
  },
});
