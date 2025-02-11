/** @format */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from '~/screen';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
