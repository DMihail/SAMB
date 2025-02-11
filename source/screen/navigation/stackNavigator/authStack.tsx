/** @format */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '~/constants';
import { Login } from '~/screen';
import { AuthStackParamList } from '~/types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      {/*<Stack.Screen name={Routes.FORGOT_PASSWORD} component={Register} />*/}
    </Stack.Navigator>
  );
};
