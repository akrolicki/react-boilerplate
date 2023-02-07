import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HomeRecord = {
  name: string;
  id: string;
};

type HomeState = {
  count: number;
  isLoadingData: boolean;
  data?: HomeRecord[];
};

const initialState: HomeState = {
  count: 0,
  isLoadingData: false,
  data: undefined,
};

const apiSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    requestData(state) {
      state.isLoadingData = true;
    },
    dataFetched(state, action: PayloadAction<HomeRecord[]>) {
      state.data = action.payload;
      state.isLoadingData = false;
    },
    clear(state) {
      state.data = [];
      state.isLoadingData = false;
    },
  },
});

export const { requestData, dataFetched, clear } = apiSlice.actions;

export default apiSlice;
