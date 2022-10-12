import { configureStore } from "@reduxjs/toolkit";
import { auth2Slice, authSlice } from "./auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    auth2: auth2Slice.reducer,
  },
});
