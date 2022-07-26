import { createSlice } from '@reduxjs/toolkit';

export interface IThemeState {
  colorMode: 'dark' | 'light';
}

const INITIAL_STATE = {
  colorMode: 'dark',
};

const themeSlide = createSlice({
  name: 'themeReducer',
  initialState: INITIAL_STATE,
  reducers: {},
});

export default themeSlide.reducer;
