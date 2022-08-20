import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TMovies } from 'types/movies.types';

interface IMovies {
  movies: TMovies;
  loading: boolean;
}

const initialState = {
  movies: [] as IMovies['movies'],
  loading: false as IMovies['loading'],
};

export const moviesSlice = createSlice({
  name: 'movies',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getMoviesStart: (state, action: PayloadAction<IMovies>) => {
      state.movies = action.payload.movies;
      state.loading = action.payload.loading;
    },
    getMoviesSuccess: (state, action: PayloadAction<IMovies>) => {
      state.movies = action.payload.movies;
      state.loading = action.payload.loading;
    },
  },
});

export const { getMoviesStart, getMoviesSuccess } = moviesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMovies = (state: RootState) => state.movies.movies;

export default moviesSlice.reducer;
