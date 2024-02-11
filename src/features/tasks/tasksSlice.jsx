import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  editTaskId: null,
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
  },
});

const { reducer, actions } = tasksSlice;
export const { setTasks, setEditTaskId } = actions;
export default reducer;
