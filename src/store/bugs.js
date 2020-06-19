import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// action types
// const ADD_BUG = 'ADD_BUG';
// const REMOVE_BUG = 'REMOVE_BUG';
// const RESOLVE_BUG = 'RESOLVE_BUG';

let lastId = 0;
const initialState = [];

/** Create Actions & Reducers
 * ---------------------------
 *
 */
const slice = createSlice({
  name: 'bugs',
  initialState: initialState,
  reducers: {
    // action: action handler function()
    ADD_BUG: (state, action) => {
      state.push({
        id: lastId++,
        description: action.payload.description,
        resloved: false,
      });
    },

    REMOVE_BUG: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },

    RESOLVE_BUG: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resloved = true;
    },
  },
});

export const { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } = slice.actions;

export default slice.reducer;

/** action creators **/

// export const addBug = createAction(ADD_BUG);
// export const removeBug = createAction(REMOVE_BUG);
// export const resolveBug = createAction(RESOLVE_BUG);

/** create actions Manually **/
/*
export default addBug = (desc) => ({
  type: ADD_BUG,
  payload: {
    description: desc,
  }
});

*/

/** create reducer */
/**
export default createReducer(initialState, {
  // action: action handler function()

  [ADD_BUG]: (state, action) => {
    state.push({
      id: lastId++,
      description: action.payload.description,
      resloved: false,
    });
  },

  [REMOVE_BUG]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state.splice(index, 1);
  },

  [RESOLVE_BUG]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resloved = true;
  },
});
 */

/** create reducer Manually */
/** 
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          resloved: false,
        },
      ];

    case REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case RESOLVE_BUG:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resloved: true }
      );

    default:
      return state;
  }
}
*/
