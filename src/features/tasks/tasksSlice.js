import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  }, 
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, action) => {
      const index = tasks.findIndex(task => task.id === action.payload);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.map(task => task.done = true);
    },
    removeTask: ({ tasks }, action) => {
      const index = tasks.findIndex(task => task.id === action.payload);
      tasks.splice(index, 1);
    },
  },
});

export const { 
  addTask, 
  toggleHideDone, 
  toggleTaskDone, 
  setAllDone, 
  removeTask,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;