import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../server/authApi";
import { courseApi } from "../server/courseApi";
import appSlice from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    app : appSlice,
    authApi: authApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(courseApi.middleware, authApi.middleware),
})