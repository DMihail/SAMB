/** @format */

import React, { FC, useCallback, useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { ChooseLanguage } from '~/assets/svg';
import { AppButton, FormPasswordInput, FormTextInput, LanguageBottomSheet, PressableImage } from '~/component';
import { emailFromInputRule, passwordFromInputRule, Routes, TEST_IDS } from '~/constants';
import { LoginNavigationProp } from '~/types';

import { AuthTemplate } from '../../components';

type LoginForm = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigation = useNavigation<LoginNavigationProp>();

  const handleSignInPress = (data: LoginForm) => {
    console.log(data);
  };

  const navigateToForgotPassword = useCallback(() => navigation.navigate(Routes.FORGOT_PASSWORD), [navigation]);

  const chooseLanguage = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <>
      <AuthTemplate
        title={'Login to your Account'}
        actionField={
          <PressableImage onPress={chooseLanguage} image={<ChooseLanguage />} testID={TEST_IDS.LOGIN.LANGUAGE_BUTTON} />
        }
        inputField={
          <>
            <FormTextInput
              control={control}
              title="Email"
              name={'email'}
              keyboardType={'email-address'}
              textContentType={'emailAddress'}
              autoComplete={'email'}
              error={errors.email?.message}
              rules={emailFromInputRule}
              testID={TEST_IDS.LOGIN.EMAIL_INPUT}
            />

            <FormPasswordInput
              control={control}
              title="Password"
              name={'password'}
              error={errors.password?.message}
              rules={passwordFromInputRule}
              testID={TEST_IDS.LOGIN.PASSWORD_INPUT}
            />
          </>
        }
        buttonField={
          <>
            <AppButton.SolidButton
              title={'Sign in'}
              onPress={handleSubmit(handleSignInPress)}
              testID={TEST_IDS.LOGIN.SIGN_IN_BUTTON}
            />
            <AppButton.LinkButton
              title={'Forgot your password?'}
              onPress={navigateToForgotPassword}
              testID={TEST_IDS.LOGIN.FORGOT_BUTTON}
            />
          </>
        }
      />
      <LanguageBottomSheet ref={bottomSheetModalRef} />
    </>
  );
};
