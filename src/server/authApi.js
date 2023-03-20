import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = 'https://auth-dukq.onrender.com'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    loginUser: build.mutation({
      query(body) {
        return {
          url: `api/auth/login`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    registerUser: build.mutation({
      query(body) {
        return {
          url: `api/auth/register`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});


export const {
  useLoginUserMutation,
  useRegisterUserMutation
} = authApi