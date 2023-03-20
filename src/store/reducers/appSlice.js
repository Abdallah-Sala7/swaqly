import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  aside : false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showAside: (state) => {
      state.aside = !state.aside
    }
  },
})

export const { showAside } = appSlice.actions
export default appSlice.reducer