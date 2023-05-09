import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AnotherPageRecord = {
  name: string;
  id: string;
};

type AnotherPageState = {
  isLoadingData: boolean;
  data?: AnotherPageRecord[];
};

const initialState: AnotherPageState = {
  isLoadingData: false,
  data: undefined,
};

const anotherPageSlice = createSlice({
  name: 'anotherPage',
  initialState,
  reducers: {
    requestData(state) {
      state.isLoadingData = true;
    },
    dataFetched(state, action: PayloadAction<AnotherPageRecord[]>) {
      state.data = action.payload;
      state.isLoadingData = false;
    },
    clear(state) {
      state.data = initialState.data;
      state.isLoadingData = initialState.isLoadingData;
    },
  },
});

export const { requestData, dataFetched, clear } = anotherPageSlice.actions;

export default anotherPageSlice;
