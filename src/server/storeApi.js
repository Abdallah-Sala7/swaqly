import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["store"],
  endpoints: (builder) => ({
    getStores: builder.query({
      query: () => "/stores",
      providesTags: ["store"],
    }),
  }),
});

export const { useGetStoresQuery } = storeApi;
