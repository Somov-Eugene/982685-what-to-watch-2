import FilmCard from '../../components/film-card/film-card';
import { promoFilmType } from '../../types/films';

type MainPageProps = {
  promo: promoFilmType;
}

function MainPage({ promo }: MainPageProps): JSX.Element {
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

          <div className="catalog__films-list">
            <FilmCard name={'Fantastic Beasts: The Crimes of Grindelwald'} posterImage={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} />
            <FilmCard name={'Bohemian Rhapsody'} posterImage={'img/bohemian-rhapsody.jpg'} />
            <FilmCard name={'Macbeth'} posterImage={'img/macbeth.jpg'} />
            <FilmCard name={'Aviator'} posterImage={'img/aviator.jpg'} />
            <FilmCard name={'We need to talk about Kevin'} posterImage={'img/we-need-to-talk-about-kevin.jpg'} />
            <FilmCard name={'What We Do in the Shadows'} posterImage={'img/what-we-do-in-the-shadows.jpg'} />
            <FilmCard name={'Revenant'} posterImage={'img/revenant.jpg'} />
            <FilmCard name={'Johnny English'} posterImage={'img/johnny-english.jpg'} />
            <FilmCard name={'Shutter Island'} posterImage={'img/shutter-island.jpg'} />
            <FilmCard name={'Pulp Fiction'} posterImage={'img/pulp-fiction.jpg'} />
            <FilmCard name={'No Country for Old Men'} posterImage={'img/no-country-for-old-men.jpg'} />
            <FilmCard name={'Snatch'} posterImage={'img/snatch.jpg'} />
            <FilmCard name={'Moonrise Kingdom'} posterImage={'img/moonrise-kingdom.jpg'} />
            <FilmCard name={'Seven Years in Tibet'} posterImage={'img/seven-years-in-tibet.jpg'} />
            <FilmCard name={'Midnight Special'} posterImage={'img/midnight-special.jpg'} />
            <FilmCard name={'War of the Worlds'} posterImage={'img/war-of-the-worlds.jpg'} />
            <FilmCard name={'Dardjeeling Limited'} posterImage={'img/dardjeeling-limited.jpg'} />
            <FilmCard name={'Orlando'} posterImage={'img/orlando.jpg'} />
            <FilmCard name={'Mindhunter'} posterImage={'img/mindhunter.jpg'} />
            <FilmCard name={'Midnight Special'} posterImage={'img/midnight-special.jpg'} />
          </div>

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
