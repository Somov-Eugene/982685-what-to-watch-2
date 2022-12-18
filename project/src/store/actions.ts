import { createAction } from '@reduxjs/toolkit';
import { FilmsType } from '../types/films';
import { Genres } from './../const';

export const changeGenre = createAction<Genres>('genre/changeGenre');

export const loadFilms = createAction<FilmsType>('film/loadFilms');

export const incementQtyFilms = createAction('film/incementQtyFilms');

export const resetQtyFilms = createAction('film/resetQtyFilms');
