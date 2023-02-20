import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category:[],
  instructor:[],
  levels:[],
  rating:0,
  search:''
}

export const filterSlice = createSlice({
  name:'filters',
  initialState,
  reducers:{
    setCategoryValue: (state, action) => {
      if (state.category.includes(action.payload)) {
        let actionIndex = state.category.indexOf(action.payload);
        state.category.splice(actionIndex,1)
      }else state.category.push(action.payload)
    },

    setInstructorValue: (state, action) => {
      if (state.instructor.includes(action.payload)) {
        let actionIndex = state.instructor.indexOf(action.payload);
        state.instructor.splice(actionIndex,1)
      }else state.instructor.push(action.payload)
    },

    setLevelsValue: (state, action) => {
      if (state.levels.includes(action.payload)) {
        let actionIndex = state.levels.indexOf(action.payload);
        state.levels.splice(actionIndex,1)
      }else state.levels.push(action.payload)
    },

    setRatingValue: (state, action) => {
      state.rating = action.payload
    },
    
    setSearch: (state, action) => {
      state.search = action.payload
    },
  }
})

export const {
  setCategoryValue, 
  setInstructorValue,
  setLevelsValue, 
  setRatingValue,
  setSearch
} = filterSlice.actions

export default filterSlice.reducer