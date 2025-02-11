/** @format */

import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { AppText } from '~/component';
import { colors, Fonts } from '~/constants';

import { CustomButtonType } from './';

export const GhostButton: FC<CustomButtonType> = ({ onPress, disabled, title, isLoading, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, disabled && styles.disabled]}>
      {isLoading ? (
        <ActivityIndicator color={colors.caribbeanGreen} size={'large'} />
      ) : (
        <AppText styleText={[styles.title, textStyle]}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: colors.caribbeanGreen,
  },
  title: {
    color: colors.caribbeanGreen,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 700,
    fontFamily: Fonts.LatoBold,
  },
  disabled: {
    opacity: 0.5,
  },
});
