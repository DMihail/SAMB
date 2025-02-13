/** @format */

import React, { FC, forwardRef, memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { BottomSheetModal, BottomSheetProps, BottomSheetView } from '@gorhom/bottom-sheet';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '~/constants';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type BackdropProps = {
  onPress: () => void;
};

export const Backdrop: FC<BackdropProps> = memo(({ onPress }) => (
  <AnimatedPressable onPress={onPress} entering={FadeIn} exiting={FadeOut} style={StyleSheet.absoluteFillObject}>
    <View style={[StyleSheet.absoluteFillObject, styles.backdrop]} />
  </AnimatedPressable>
));

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(({ children, ...props }, ref) => {
  const { bottom: bottomSafeAreaInset } = useSafeAreaInsets();

  return (
    <BottomSheetModal ref={ref} style={styles.container} enableDynamicSizing={false} accessible={false} {...props}>
      <BottomSheetView style={[styles.container, { paddingBottom: bottomSafeAreaInset }]}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  backdrop: {
    backgroundColor: colors.neroOpacity,
  },
});
