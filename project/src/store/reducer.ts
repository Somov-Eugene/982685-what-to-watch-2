import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, incementQtyFilms, loadFilms, resetQtyFilms } from './actions';
import { FilmsType } from './../types/films';
import { Genres, QTY_DISPLAYED_FILMS_DEFAULT } from '../const';
import { mockFilms } from '../mocks/films';

type InitialState = {
  genre: string;
  films: FilmsType;
  QtyShowFilms: number;
};

const initialState: InitialState = {
  genre: Genres.AllGenres,
  films: mockFilms,
  QtyShowFilms: QTY_DISPLAYED_FILMS_DEFAULT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(incementQtyFilms, (state) => {
      state.QtyShowFilms += QTY_DISPLAYED_FILMS_DEFAULT;
    })
    .addCase(resetQtyFilms, (state) => {
      state.QtyShowFilms = QTY_DISPLAYED_FILMS_DEFAULT;
    });
});

export { reducer };
