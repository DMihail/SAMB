/** @format */

import { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { AppText, DismissKeyboard } from '~/component';
import { colors, Fonts } from '~/constants';

type AuthTemplateProps = {
  title: string;
  actionField: ReactNode;
  inputField: ReactNode;
  buttonField: ReactNode;
};

export const AuthTemplate: FC<AuthTemplateProps> = ({ title, inputField, buttonField, actionField }) => {
  return (
    <SafeAreaView style={styles.view}>
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.action}>{actionField}</View>
            <View style={styles.textContainer}>
              <AppText styleText={styles.samb}>SAMB</AppText>
              <AppText styleText={[styles.samb, styles.title]}>{title}</AppText>
            </View>
            <View style={styles.inputContainer}>{inputField}</View>
          </View>

          <View style={[styles.inputContainer, styles.buttonContainer]}>{buttonField}</View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    paddingVertical: 24,
    flex: 1,
  },
  topContainer: {
    width: '100%',
  },
  action: {
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  textContainer: {
    gap: 60,
    marginBottom: 40,
  },
  samb: {
    fontFamily: Fonts.LatoBold,
    fontSize: 24,
    fontWeight: 700,
    color: colors.nero,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
  },
  inputContainer: {
    width: '100%',
    gap: 35,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
