import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
    },
  },
});

export default bookSlice.reducer;
