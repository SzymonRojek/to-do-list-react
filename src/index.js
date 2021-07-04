import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case "addTask" :
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ],
      };

    default:
      return state;
  }
};

const store = configureStore({ reducer: tasksReducer });

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();