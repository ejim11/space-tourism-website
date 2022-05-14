import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    id: "Moon",
  },
  reducers: {
    changeId(state, action) {
      state.id = action.payload;
    },
  },
});

export const destinationActions = destinationSlice.actions;

export default destinationSlice.reducer;
