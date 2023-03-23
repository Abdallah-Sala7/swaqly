import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://secret-axiomatic-taker.glitch.me";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    addProduct: builder.mutation({
      query: (body) => ({
        url: `/products`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    editProduct: builder.mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: ({id}) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags:['Product']
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
