import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <h1 className="page-title user-page__title">Error 404: Not Found</h1>
      </header>

      <div className="sign-in user-page__content">
        <p className="page-title user-page__title">We are really sorry, but page not found</p>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link className="logo__link logo__link--light" to={AppRoute.Root}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFoundPage;
