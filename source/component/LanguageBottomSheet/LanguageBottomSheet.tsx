/** @format */

import React, { FC, forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AppButton, AppText, RadioButton, BottomSheetHeader, BottomSheet, Backdrop } from '~/component';
import { colors, Fonts, LANGUAGES, TEST_IDS } from '~/constants';

type LanguageFieldProps = {
  title: string;
  flag: React.JSX.Element;
  setLanguage: (v: string) => void;
  isSelected: boolean;
};

const LanguageField: FC<LanguageFieldProps> = ({ title, flag, setLanguage, isSelected }) => {
  const select = useCallback(() => setLanguage(title), [setLanguage, title]);

  return (
    <Pressable onPress={select} style={styles.field}>
      <View style={styles.titleContainer}>
        {flag}
        <AppText styleText={styles.title}>{title}</AppText>
      </View>
      <RadioButton isSelected={isSelected} disabled={true} />
    </Pressable>
  );
};

export const LanguageBottomSheet = forwardRef((_, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>(LANGUAGES[0].title);

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetModalRef.current?.present();
    },
  }));

  const setLanguage = useCallback((language: string) => {
    setCurrentLanguage(language);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetModalRef}
      snapPoints={['80%']}
      backdropComponent={() => <Backdrop onPress={closeModal} />}
    >
      <BottomSheetHeader onClose={closeModal} title={'Language'} />
      <View style={styles.container}>
        <View>
          {LANGUAGES.map(({ title, flag }) => (
            <LanguageField
              title={title}
              flag={flag}
              setLanguage={setLanguage}
              isSelected={currentLanguage === title}
              key={title}
            />
          ))}
        </View>
        <AppButton.SolidButton title={'Save'} onPress={() => {}} testID={TEST_IDS.LOGIN.SIGN_IN_BUTTON} />
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.neroOpacity,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.LatoBold,
    fontSize: 18,
    fontWeight: 700,
    color: colors.nero,
  },
});
