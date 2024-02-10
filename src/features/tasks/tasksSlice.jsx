import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksData: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasksData: (state, { payload }) => {
      state.tasksData = payload;
    },
  },
});

const { reducer, actions } = tasksSlice;
export const { setTasksData } = actions;
export default reducer;
