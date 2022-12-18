import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { FilmsType, FilmType } from '../../types/films';
import { ReviewsType } from '../../types/reviews';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  promo: FilmType;
  films: FilmsType;
  reviews: ReviewsType;
}

function App({ promo, films, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage promo={promo} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage myListFilms={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}${AppRoute.Id}`}
          element={<MoviePage films={films} reviews={reviews} />}
        />
        <Route
          path={`${AppRoute.Film}${AppRoute.Id}${AppRoute.AddReview}`}
          element={<AddReviewPage films={films} />}
        />
        <Route
          path={`${AppRoute.Player}${AppRoute.Id}`}
          element={<PlayerPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
