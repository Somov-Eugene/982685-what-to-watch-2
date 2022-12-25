import { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ListGenres from '../../components/list-genres/list-genres';
import ListFilms from '../../components/list-films/list-films';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filteredFilmsByGenre } from '../../utils/utils';
import { mockUser } from '../../mocks/user';
import { Genres } from '../../const';
import { resetQtyFilms } from '../../store/actions';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const promo = useAppSelector((state) => state.promo);
  const films = useAppSelector((state) => state.films);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const selectedGenre = useAppSelector((state) => state.genre) as Genres;
  const qtyShowFilms = useAppSelector((state) => state.QtyShowFilms);
  const filteredFilms = filteredFilmsByGenre(films, selectedGenre);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      dispatch(resetQtyFilms);
    };
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          {(authorizationStatus && promo) ? <img src={promo.backgroundImage} alt={promo.name} /> : <img src="img/bg-header.jpg" alt="" />}
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock user={mockUser} />
        </header>

        {(authorizationStatus && promo) &&
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
                    <span className="film-card__count">{favoriteFilms.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>}
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ListGenres />
          <ListFilms films={filteredFilms} />
          {((filteredFilms.length - qtyShowFilms) > 0) && <ShowMoreButton />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
