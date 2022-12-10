import FilmCard from '../../components/film-card/film-card';

function MyListPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a className="logo__link" href="main.html">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

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
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light" href="main.html">
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
  );
}

export default MyListPage;