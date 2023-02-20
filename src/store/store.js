import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../server/authApi";
import { courseApi } from "../server/courseApi";
import appSlice from "./reducers/appSlice";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    app : appSlice,
    filters : filterSlice,
    courseApi : courseApi.reducer,
    authApi: authApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(courseApi.middleware, authApi.middleware),
})