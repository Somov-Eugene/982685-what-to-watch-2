import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmTabs from '../../components/film-tabs/film-tabs';
import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import { mockSimilarFilms } from '../../mocks/films';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const films = useAppSelector((state) => state.films);
  const similarFilms = mockSimilarFilms;
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;
  const reviews = useAppSelector((state) => state.reviews);

  const currentFilm = films.find((film) => `${film.id}` === id);

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  const {id: filmId, backgroundColor, backgroundImage, posterImage, name, genre, released } = currentFilm;

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {(authorizationStatus === AuthorizationStatus.Auth) ?
                  <>
                    <button className="btn btn--list film-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                      <span className="film-card__count">{favoriteFilmsCount}</span>
                    </button>
                    <Link className="btn film-card__button" to={`${AppRoute.AddReview}/${filmId}`}>Add review</Link>
                  </> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <FilmTabs film={currentFilm} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <ListFilms films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
