/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import jsonSlice from './json/jsonSlice';

// import productSlice from './json/productSlice';

import authSlice from './components/Auth/authSlice';
import SerchOrderSlice from './components/SerchOrder/SerchOrderSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    jsons: jsonSlice,
    service: jsonSlice,
    products: jsonSlice,
    carts: jsonSlice,
    auth: authSlice,
    service_orders: SerchOrderSlice,
  },
});

// для правильной типизации будем использовать useAppDispatch вместо
// useDispatch;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
