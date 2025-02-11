/** @format */

import { StyleSheet, View } from 'react-native';

import { useForm } from 'react-hook-form';

import { AppButton, AppText } from '~/component';
import { FormTextInput } from '~/component/FormTextInput/FormTextInput';
import { colors, emailFromInputRule, Fonts, passwordFromInputRule } from '~/constants';

type LoginForm = {
  email: string;
  password: string;
};

export const Login = () => {
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

  const handleSignInPress = (data: LoginForm) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <View style={styles.container}>
      <AppText styleText={styles.samb}>SAMB</AppText>

      <AppText styleText={[styles.samb, styles.title]}>Login to your Account</AppText>

      <View style={styles.inputContainer}>
        <FormTextInput
          control={control}
          title="Email"
          name={'email'}
          keyboardType={'email-address'}
          textContentType={'emailAddress'}
          autoComplete={'email'}
          error={errors.email?.message}
          rules={emailFromInputRule}
        />

        <FormTextInput
          control={control}
          title="Password"
          name={'password'}
          textContentType={'password'}
          autoComplete={'password'}
          secureTextEntry
          error={errors.password?.message}
          rules={passwordFromInputRule}
        />
      </View>

      <View style={[styles.inputContainer, styles.buttonContainer]}>
        <AppButton.SolidButton title={'Sign in'} onPress={handleSubmit(handleSignInPress)} />
        <AppButton.LinkButton title={'Forgot your password?'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  samb: {
    fontFamily: Fonts.LatoBold,
    fontSize: 24,
    fontWeight: 700,
    color: colors.nero,
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
