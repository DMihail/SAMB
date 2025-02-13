/** @format */

import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Close } from '~/assets/svg';
import { AppText, PressableImage } from '~/component';
import { colors, Fonts, TEST_IDS } from '~/constants';

type BottomSheetHeaderProps = {
  onClose: () => void;
  title: string;
};

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({ title, onClose }) => {
  return (
    <View style={styles.container}>
      <AppText styleText={styles.title}>{title}</AppText>
      <PressableImage
        onPress={onClose}
        image={<Close />}
        style={styles.close}
        testID={TEST_IDS.LOGIN.LANGUAGE_BUTTON}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBlockColor: colors.neroOpacity,
  },
  title: {
    fontFamily: Fonts.LatoBold,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 700,
    color: colors.nero,
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: 22,
    top: 22,
  },
});
