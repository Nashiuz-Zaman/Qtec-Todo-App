import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  editTaskId: null,
  filter: 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    setEditTaskId: (state, { payload }) => {
      state.editTaskId = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const { reducer, actions } = tasksSlice;
export const { setTasks, setEditTaskId, setFilter } = actions;
export default reducer;
