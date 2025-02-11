/** @format */

import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '~/constants';
import { AuthStack } from '~/screen/navigation/stackNavigator/authStack';
import { RootStackParamList } from '~/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.AUTH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.AUTH} component={AuthStack} />
    </Stack.Navigator>
  );
};
