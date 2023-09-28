import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  getCategoryStatus: () => 'Under construction',
});

export default categoriesSlice.reducer;
