/** @format */

import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { Fonts } from '~/constants';

type AppTextProps = {
  font?: (typeof Fonts)[keyof typeof Fonts];
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
  children?: React.ReactNode;
};

export const AppText: FC<AppTextProps> = ({ font = Fonts.LatoRegular, styleText, onPress, children, ...props }) => {
  return (
    <Text
      allowFontScaling={false}
      style={[styles.defaultText, { fontFamily: font }, styleText]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Fonts.LatoRegular,
    fontSize: 18,
    fontWeight: 400,
  },
});
