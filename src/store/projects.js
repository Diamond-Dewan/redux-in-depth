import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const initialState = [];

/**
 * Create Actions & Reducers
 * ---------------------------
 */
const slice = createSlice({
  name: 'projects',
  initialState: initialState,
  reducers: {
    // action: action handler function()
    ADD_PROJECT: (projects, action) => {
      projects.push({
        id: lastId++,
        name: action.payload.name,
      });
    },

    REMOVE_PROJECT: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects.splice(index, 1);
    },
  },
});

export const { ADD_PROJECT, REMOVE_PROJECT } = slice.actions;

export default slice.reducer;
