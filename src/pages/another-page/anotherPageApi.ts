import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/api';

type Cat = {
  height: number;
  width: number;
  id: string;
  url: string;
};

export const anotherPageApi = createApi({
  reducerPath: 'anotherPageApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    randomCatPhoto: build.query<Cat[], void>({
      query: () => '/images/search',
    }),
  }),
});

export const { useRandomCatPhotoQuery } = anotherPageApi;
