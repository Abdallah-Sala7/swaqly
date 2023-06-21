import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");
const baseUrl = "http://127.0.0.1:8000";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.mutation({
      query: (body) => ({
        url: "/api/trader/product",
        method: "GET",
        body,
        headers,
      }),
      invalidatesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (body) => ({
        url: `/api/trader/product/store`,
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["product"],
    }),

    editProduct: builder.mutation({
      query: (body) => ({
        url: `/api/trader/product/update/${body.id}`,
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (body) => ({
        url: `/api/trader/product/destroy/${body.id}`,
        method: "POST",
        body,
        headers,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductMutation,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
