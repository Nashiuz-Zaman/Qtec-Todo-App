// imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createFormOpen: false,
  editFormOpen: false,
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setCreateFormOpen: (state, { payload }) => {
      state.createFormOpen = payload;
    },
    setEditFormOpen: (state, { payload }) => {
      state.editFormOpen = payload;
    },
  },
});

const { actions, reducer } = formsSlice;
export const { setCreateFormOpen, setEditFormOpen } = actions;
export default reducer;
