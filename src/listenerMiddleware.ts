import { addListener, createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedAddListener, TypedStartListening } from '@reduxjs/toolkit';
import { addHomeListeners } from './home/homeListeners';
import type { AppDispatch, RootState } from './store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

[addHomeListeners].forEach((listeners) => listeners(startAppListening));
