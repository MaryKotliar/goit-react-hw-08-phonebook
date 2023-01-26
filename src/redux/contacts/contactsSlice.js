import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
const extraActions = [fetchContacts, addContacts, deleteContacts];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));
const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),

  //     [fetchContacts.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [fetchContacts.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     [fetchContacts.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //     [addContacts.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [addContacts.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(action.payload);
  //     },
  //     [addContacts.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //     [deleteContacts.pending](state) {
  //       state.isLoading = true;
  //     },
  //     [deleteContacts.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(
  //         contact => contact.id === action.payload.id
  //       );
  //       state.items.splice(index, 1);
  //     },
  //     [deleteContacts.rejected](state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
