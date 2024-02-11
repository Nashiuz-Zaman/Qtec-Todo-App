// imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const { actions, reducer } = applicationSlice;
export const { setIsLoading } = actions;
export default reducer;
