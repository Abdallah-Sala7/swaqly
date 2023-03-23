import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://secret-axiomatic-taker.glitch.me";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
      providesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),

    editProduct: builder.mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (body) => ({
        url: `/products/${body}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags:['product']
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
