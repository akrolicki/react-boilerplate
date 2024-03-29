import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { listenerMiddleware } from './listenerMiddleware';
import { anotherPageApi } from './pages/another-page/anotherPageApi';
import anotherPageSlice from './pages/another-page/anotherPageSlice';

const appReducer = combineReducers({
  [anotherPageSlice.name]: anotherPageSlice.reducer,
  [anotherPageApi.reducerPath]: anotherPageApi.reducer,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(anotherPageApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
