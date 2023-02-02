import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increaseCount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decreaseCountByOne(state) {
      state.count -= 1;
    },
    requestData(state) {
      state.isLoadingData = true;
    },
    dataFetched(state, action: PayloadAction<HomeRecord[]>) {
      state.data = action.payload;
      state.isLoadingData = false;
    },
  },
});

export const { increaseCount, decreaseCountByOne, requestData, dataFetched } = homeSlice.actions;

export default homeSlice;
