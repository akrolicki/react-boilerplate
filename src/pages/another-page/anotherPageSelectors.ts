import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

import { anotherPageApi } from './anotherPageApi';

export const selectIsLoadingData = (state: RootState) => state.anotherPage.isLoadingData;

export const selectData = (state: RootState) => {
  return state.anotherPage.data;
};

// select data fetched from rtk query
export const selectRandomCatApiQuery = anotherPageApi.endpoints.randomCatPhoto.select();
export const selectRandomCatData = createSelector(selectRandomCatApiQuery, (query) => query.data);
