import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://auth-dukq.onrender.com";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "api/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),

    registerUser: builder.mutation({
      query: (body) => ({
        url: "api/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
