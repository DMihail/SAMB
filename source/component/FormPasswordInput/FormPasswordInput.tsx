/** @format */

import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { FieldValues } from 'react-hook-form';

import { CloseEye, Eye } from '~/assets/svg';
import { FormTextInput, PressableImage, InputProps } from '~/component';

export const FormPasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handlePress = useCallback(() => setIsShow((prevState) => !prevState), []);

  return (
    <View style={styles.container}>
      <FormTextInput
        {...props}
        secureTextEntry={isShow}
        textContentType={'password'}
        autoComplete={'password'}
        clearTextOnFocus={false}
      />
      <PressableImage image={isShow ? <CloseEye /> : <Eye />} style={styles.icon} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 14,
    top: 20,
  },
});
