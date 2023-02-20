import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://courses-66zt.onrender.com'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCourse: builder.query({
      query:()=> '/courses'
    }),

    getCourseById: builder.query({
      query:(id) => `/courses/${id}`
    }),

    getInstructorByName: builder.query({
      query:(name)=> name === 'all' ? '/courses' : `/courses?instructor?name=${name}`
    })
  })
})

export const {useGetCourseQuery, useGetCourseByIdQuery, useGetInstructorByNameQuery} = courseApi