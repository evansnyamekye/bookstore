/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import bookReducer from './books/bookSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    book: bookReducer,
  },
});

export default store;
