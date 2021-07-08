import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
    loading: false,
  }, 
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId}) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    removeTask: ({ tasks }, { payload: taskId}) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: state => {
      state.loading = true;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
      console.log(state.loading);
    },
    setError: state => {
      state.loading = false;
    },
  },
});
 
export const { 
  addTask, 
  toggleHideDone, 
  toggleTaskDone, 
  setAllDone, 
  removeTask,
  fetchExampleTasks,
  setTasks,
  setError,
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectLoading = state => state.loading;

export default tasksSlice.reducer;