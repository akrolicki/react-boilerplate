import type { TypedAddListener, TypedStartListening } from '@reduxjs/toolkit';
import { addListener, createListenerMiddleware } from '@reduxjs/toolkit';

import { addAnotherPageListeners } from './pages/another-page/anotherPageListeners';
import type { AppDispatch, RootState } from './store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

[addAnotherPageListeners].forEach((listeners) => listeners(startAppListening));
