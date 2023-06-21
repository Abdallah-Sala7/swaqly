import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://127.0.0.1:8000";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/trader/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),

    registerUser: builder.mutation({
      query: (body) => ({
        url: "/api/trader/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
