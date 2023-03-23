import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside: false,
  notification: false,
  dark: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showAside: (state) => {
      state.aside = !state.aside;
      state.notification = false;
    },

    showNotification: (state) => {
      state.notification = !state.notification;
      state.aside = false;
    },

    resetAll: (state) => {
      state.aside = false;
      state.notification = false;
    },

    setDark: (state) => {
      state.dark = !state.dark;
    }
  },
});

export const { showAside, showNotification, resetAll, setDark } = appSlice.actions;
export default appSlice.reducer;
