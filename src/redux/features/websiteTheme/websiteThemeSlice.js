import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const websiteThemeSlice = createSlice({
  name: "websiteTheme",
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

const { reducer, actions } = websiteThemeSlice;
export const { setTheme } = actions;
export default reducer;
