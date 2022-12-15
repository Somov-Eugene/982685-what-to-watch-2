import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmTabs from '../../components/film-tabs/film-tabs';
import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import { FilmsType } from '../../types/films';
import { ReviewsType } from '../../types/reviews';
import { mockSimilarFilms } from '../../mocks/films';
import { mockUser } from '../../mocks/user';
import { AppRoute } from '../../const';

type MoviePageProps = {
  films: FilmsType;
  reviews: ReviewsType;
}

function MoviePage({ films, reviews } :MoviePageProps): JSX.Element {
  const { id } = useParams();

  const currentFilm = films.find((film) => `${film.id}` === id);

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  const similarFilms = mockSimilarFilms;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock user={mockUser} />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link className="btn film-card__button" to={`${AppRoute.AddReview}/${currentFilm.id}`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
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
