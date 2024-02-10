// redux
import { configureStore } from "@reduxjs/toolkit";

// reducers
import websiteThemeReducer from "./../features/websiteTheme/websiteThemeSlice";

export const store = configureStore({
  reducer: {
    websiteTheme: websiteThemeReducer,
  },
});
