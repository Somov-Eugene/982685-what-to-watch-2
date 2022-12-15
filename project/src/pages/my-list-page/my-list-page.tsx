import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ListFilms from '../../components/list-films/list-films';
import Footer from '../../components/footer/footer';
import { FilmsType } from '../../types/films';
import { mockUser } from '../../mocks/user';

type MyListPageProps = {
  myListFilms: FilmsType;
}

function MyListPage({ myListFilms }: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListFilms.length}</span></h1>
        <UserBlock user={mockUser} />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms films={myListFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
