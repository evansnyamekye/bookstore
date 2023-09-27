/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    // Initial state:
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  count: 4,
  isloading: true,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addNewBook, removeItem } = bookSlice.actions;

export default bookSlice.reducer;
