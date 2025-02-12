/** @format */

import React, { FC, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { LeftArrow } from '~/assets/svg';
import { AppButton, FormTextInput, PressableImage } from '~/component';
import { emailFromInputRule, TEST_IDS } from '~/constants';
import { ForgotPasswordNavigationProp } from '~/types';

import { AuthTemplate } from '../../components';

type LoginForm = {
  email: string;
  password: string;
};

export const ForgotPassword: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
    },
  });
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const handleSignInPress = (data: LoginForm) => {
    console.log(data);
  };

  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <AuthTemplate
      title={'A temporary password\nwill be sent to this email'}
      actionField={
        <PressableImage onPress={goBack} image={<LeftArrow />} testID={TEST_IDS.FORGOT_PASSWORD.BACK_BUTTON} />
      }
      inputField={
        <FormTextInput
          control={control}
          title="Email"
          name={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          autoComplete={'email'}
          error={errors.email?.message}
          rules={emailFromInputRule}
          testID={TEST_IDS.FORGOT_PASSWORD.EMAIL_INPUT}
        />
      }
      buttonField={
        <AppButton.SolidButton
          title={'Send'}
          onPress={handleSubmit(handleSignInPress)}
          testID={TEST_IDS.FORGOT_PASSWORD.SEND_BUTTON}
        />
      }
    />
  );
};
