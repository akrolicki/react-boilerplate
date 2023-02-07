import { RootState } from 'src/store';

export const selectIsLoadingData = (state: RootState) => state.home.isLoadingData;

export const selectData = (state: RootState) => {
  return state.home.data;
};
