import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
