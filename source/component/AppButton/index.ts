/** @format */

import { TextStyle } from 'react-native';

import { GhostButton } from './GhostButton';
import { LinkButton } from './LinkButton';
import { SolidButton } from './SolidButton';

export type CustomButtonType = {
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  title: string;
  textStyle?: TextStyle;
};

export const AppButton = {
  LinkButton,
  SolidButton,
  GhostButton,
};
