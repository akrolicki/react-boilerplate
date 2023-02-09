import { RootState } from 'src/store';

export const selectIsLoadingData = (state: RootState) => state.anotherPageApi.isLoadingData;

export const selectData = (state: RootState) => {
  return state.anotherPageApi.data;
};
