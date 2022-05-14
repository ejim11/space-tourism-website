import { createSlice } from "@reduxjs/toolkit";

const crewSlice = createSlice({
  name: "crew",
  initialState: {
    index: 0,
  },
  reducers: {
    decreaseIndex(state) {
      if (state.index === -3) {
        state.index = 0;
      } else {
        state.index--;
      }
    },
    setIndex(state, action) {
      const i = -action.payload;
      state.index = i;
    },
  },
});

export const crewActions = crewSlice.actions;

export default crewSlice.reducer;
