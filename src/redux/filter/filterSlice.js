import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, { payload }) {
      state = payload;
      return state;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
