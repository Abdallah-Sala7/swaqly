import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");
const baseUrl = "http://127.0.0.1:8000";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["store"],
  endpoints: (builder) => ({
    getStores: builder.mutation({
      query: (body) => ({
        url: "/api/trader/store",
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["store"],
    }),

    addStore: builder.mutation({
      query: (body) => ({
        url: `/api/trader/store/store`,
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["store"],
    }),

    deleteStore: builder.mutation({
      query: (body) => ({
        url: `/api/trader/store/destroy/${body.id}`,
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["store"],
    }),
  }),
});

export const {
  useGetStoresMutation,
  useAddStoreMutation,
  useDeleteStoreMutation,
} = storeApi;
