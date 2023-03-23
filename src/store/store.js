import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./server/authApi";
import { productApi } from "./server/prouctApi";
import { storeApi } from "./server/storeApi";
import appSlice from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    authApi: authApi.reducer,
    productApi: productApi.reducer,
    storeApi: storeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      storeApi.middleware
    ),
});
