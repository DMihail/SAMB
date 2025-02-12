/** @format */

import React, { FC, ReactNode } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

type PressableImageProps = {
  onPress?: () => void;
  disabled?: boolean;
  image: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

export const PressableImage: FC<PressableImageProps> = ({ onPress, disabled, image, style, testID }) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={style} testID={testID}>
      {image}
    </Pressable>
  );
};
