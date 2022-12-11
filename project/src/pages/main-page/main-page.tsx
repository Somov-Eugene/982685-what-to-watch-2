import ListFilms from '../../components/list-films/list-films';
import { FilmsType, FilmType } from '../../types/films';

type MainPageProps = {
  promo: FilmType;
  films: FilmsType;
}

function MainPage({ promo, films }: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link" href="#todo">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#todo">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a className="catalog__genres-link" href="#todo">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a className="catalog__genres-link" href="#todo">Thrillers</a>
            </li>
          </ul>

          <ListFilms films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href="#todo">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
