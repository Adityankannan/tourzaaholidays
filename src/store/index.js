import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "./slices/packagesSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    packages: packagesReducer,
    ui: uiReducer,
  },
});

export default store;
