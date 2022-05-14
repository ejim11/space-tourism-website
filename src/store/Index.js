import { configureStore } from "@reduxjs/toolkit";

import destinationReducer from "./destination-slice";

import crewReducer from "./crewSlice";

import techReducer from "./techSlice";

const Store = configureStore({
  reducer: {
    destination: destinationReducer,
    crew: crewReducer,
    tech: techReducer,
  },
});

export default Store;
