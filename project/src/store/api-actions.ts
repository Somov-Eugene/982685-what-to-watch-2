import { FilmType } from './../types/films';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadFavoriteFilms, loadFilms, loadPromo, requireAuthorizationStatus, setFilmsDataLoadingStatus } from './actions';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { FilmsType } from '../types/films';
import { AuthData, User } from '../types/user';
import { APIRoute, AuthorizationStatus } from '../const';

export const fetchPromoAction = createAsyncThunk<
  FilmType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromo', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsDataLoadingStatus(true));
  const { data } = await api.get<FilmType>(APIRoute.Promo);
  dispatch(setFilmsDataLoadingStatus(false));
  dispatch(loadPromo(data));
  return data;
});

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsDataLoadingStatus(true));
  const { data } = await api.get<FilmsType>(APIRoute.Films);
  dispatch(setFilmsDataLoadingStatus(false));
  dispatch(loadFilms(data));
});

export const fetchFavoriteFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsDataLoadingStatus(true));
  const { data } = await api.get<FilmsType>(APIRoute.Favorites);
  dispatch(setFilmsDataLoadingStatus(false));
  dispatch(loadFavoriteFilms(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<User>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorizationStatus(AuthorizationStatus.NoAuth));
});
