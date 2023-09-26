/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  getCategoryStatus: () => 'This page is under construction',
});

export default categoriesSlice.reducer;
