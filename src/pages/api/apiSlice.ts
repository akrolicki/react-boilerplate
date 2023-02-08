import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ApiRecord = {
  name: string;
  id: string;
};

type ApiState = {
  isLoadingData: boolean;
  data?: ApiRecord[];
};

const initialState: ApiState = {
  isLoadingData: false,
  data: undefined,
};

const apiSlice = createSlice({
  name: 'Api',
  initialState,
  reducers: {
    requestData(state) {
      state.isLoadingData = true;
    },
    dataFetched(state, action: PayloadAction<ApiRecord[]>) {
      state.data = action.payload;
      state.isLoadingData = false;
    },
    clear(state) {
      state.data = initialState.data;
      state.isLoadingData = initialState.isLoadingData;
    },
  },
});

export const { requestData, dataFetched, clear } = apiSlice.actions;

export default apiSlice;
