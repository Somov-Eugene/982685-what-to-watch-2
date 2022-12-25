import { createAction } from '@reduxjs/toolkit';
import { FilmType, FilmsType } from '../types/films';
import { AuthorizationStatus, Genres } from '../const';

export const changeGenre = createAction<Genres>('genre/changeGenre');

export const loadPromo = createAction<FilmType>('film/loadPromo');

export const loadFilms = createAction<FilmsType>('film/loadFilms');

export const loadFavoriteFilms = createAction<FilmsType>('film/loadFavoriteFilms');

export const incementQtyFilms = createAction('film/incementQtyFilms');

export const resetQtyFilms = createAction('film/resetQtyFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');
