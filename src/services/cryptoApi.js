import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "65c1d41319msh1a5ee87206d59b4p1b9fc3jsn457d2857df87",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});


export const {
    useGetCryptosQuery,
    useGetExchangesQuery,
    useGetCryptosDetailsQuery,
    useGetCryptosHistoryQuery,
} = cryptoApi;