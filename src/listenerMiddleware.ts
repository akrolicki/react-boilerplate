import type { TypedAddListener, TypedStartListening } from '@reduxjs/toolkit';
import { addListener, createListenerMiddleware } from '@reduxjs/toolkit';

import { addApiListeners } from './pages/api/apiListeners';
import type { AppDispatch, RootState } from './store';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

[addApiListeners].forEach((listeners) => listeners(startAppListening));
