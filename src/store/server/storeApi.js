import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://secret-axiomatic-taker.glitch.me";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["store"],
  endpoints: (builder) => ({
    getStores: builder.query({
      query: () => "/stores",
      providesTags: ["store"],
    }),

    addStore: builder.mutation({
      query: (body) => ({
        url: `/stores`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["store"],
    }),

    deleteStore: builder.mutation({
      query: ({ id }) => ({
        url: `/stores/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["store"],
    }),
  }),
});

export const {
  useGetStoresQuery,
  useAddStoreMutation,
  useDeleteStoreMutation,
} = storeApi;
