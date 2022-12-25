import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, incementQtyFilms, loadFavoriteFilms, loadFilms, loadPromo, requireAuthorizationStatus, resetQtyFilms, setFilmsDataLoadingStatus } from './actions';
import { FilmType, FilmsType } from './../types/films';
import { ReviewsType } from './../types/reviews';
import { AuthorizationStatus, Genres, QTY_DISPLAYED_FILMS_DEFAULT } from '../const';

type InitialState = {
  genre: string;
  promo: FilmType | undefined;
  films: FilmsType;
  similarFilms: FilmsType;
  favoriteFilms: FilmsType;
  reviews: ReviewsType;
  QtyShowFilms: number;
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  genre: Genres.AllGenres,
  promo: undefined,
  films: [],
  similarFilms: [],
  favoriteFilms: [],
  reviews: [],
  QtyShowFilms: QTY_DISPLAYED_FILMS_DEFAULT,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(incementQtyFilms, (state) => {
      state.QtyShowFilms += QTY_DISPLAYED_FILMS_DEFAULT;
    })
    .addCase(resetQtyFilms, (state) => {
      state.QtyShowFilms = QTY_DISPLAYED_FILMS_DEFAULT;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
