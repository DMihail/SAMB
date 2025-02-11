/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { AUTH, AuthStateType } from './auth';
import authReducer from './auth/slice';

const persistConfig = {
  key: AUTH,
  storage: AsyncStorage,
  whitelist: ['isAuthorized'],
};

export type StateType = {
  auth: AuthStateType;
};

const rootReducers = {
  auth: persistReducer(persistConfig, authReducer),
};

export default rootReducers;
