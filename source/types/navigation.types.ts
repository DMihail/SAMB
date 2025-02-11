
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Routes } from '../constants';



export type RootStackParamList = {
  [Routes.AUTH]: undefined;
};

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.FORGOT_PASSWORD]: undefined;
};


export type LoginNavigationProp = NativeStackScreenProps<
  AuthStackParamList & RootStackParamList,
  Routes.LOGIN
>["navigation"];

export type ForgotPasswordNavigationProp = NativeStackScreenProps<
  AuthStackParamList & RootStackParamList,
  Routes.FORGOT_PASSWORD
>["navigation"];



