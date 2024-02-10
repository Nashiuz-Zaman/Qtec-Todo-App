// redux
import { configureStore } from "@reduxjs/toolkit";

// reducers
import websiteThemeReducer from "./../features/websiteTheme/websiteThemeSlice";
import tasksReducer from "./../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    websiteTheme: websiteThemeReducer,
    tasks: tasksReducer,
  },
});
