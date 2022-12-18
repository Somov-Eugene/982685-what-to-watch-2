import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms } from './actions';
import { FilmsType } from './../types/films';
import { Genres } from '../const';
import { mockFilms } from '../mocks/films';

type InitialState = {
  genre: string;
  films: FilmsType;
};

const initialState: InitialState = {
  genre: Genres.AllGenres,
  films: mockFilms,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
