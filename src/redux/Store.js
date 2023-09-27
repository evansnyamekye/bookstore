/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import booksReducer from './books/bookSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    bookItems: booksReducer,
  },
});

export default store;
