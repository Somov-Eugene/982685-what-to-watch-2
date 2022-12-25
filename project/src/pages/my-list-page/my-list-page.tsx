import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { mockUser } from '../../mocks/user';

function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserBlock user={mockUser} />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
