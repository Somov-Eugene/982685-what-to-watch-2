import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import UserBlock from '../../components/user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';
import { mockUser } from '../../mocks/user';

function AddReviewPage(): JSX.Element {
  const { id } = useParams();
  const films = useAppSelector((state) => state.films);
  const currentFilm = films.find((film) => `${film.id}` === id);

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs film={currentFilm} />
          <UserBlock user={mockUser} />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <AddReviewForm filmId={currentFilm.id} />
    </section>
  );
}

export default AddReviewPage;
