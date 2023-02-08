import { RootState } from 'src/store';

export const selectIsLoadingData = (state: RootState) => state.Api.isLoadingData;

export const selectData = (state: RootState) => {
  return state.Api.data;
};
