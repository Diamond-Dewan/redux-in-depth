const { createSlice } = require('@reduxjs/toolkit');
const { LoaderOptionsPlugin } = require('webpack');

let lastId = 0;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    ADD_USER: (usersState, action) => {
      usersState.push({
        id: lastId++,
        name: action.payload.name,
      });
    },
  },
});

export const { ADD_USER } = slice.actions;
export default slice.reducer;
