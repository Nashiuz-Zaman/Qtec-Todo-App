// redux
import { configureStore } from "@reduxjs/toolkit";

// reducers
import applicationReducer from "./../features/application/applicationSlice";
import websiteThemeReducer from "./../features/websiteTheme/websiteThemeSlice";
import tasksReducer from "./../features/tasks/tasksSlice";
import backdropReducer from "./../features/backdrop/backdropSlice";
import formsReducer from "./../features/forms/formsSlice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    websiteTheme: websiteThemeReducer,
    tasks: tasksReducer,
    backdrop: backdropReducer,
    forms: formsReducer,
  },
});
