import { createSlice } from "@reduxjs/toolkit";

const techSlice = createSlice({
  name: "tech",
  initialState: {
    id: 1,
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const techActions = techSlice.actions;

export default techSlice.reducer;
