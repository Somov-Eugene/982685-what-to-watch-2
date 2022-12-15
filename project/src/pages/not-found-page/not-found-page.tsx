import Footer from '../../components/footer/footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <h1 className="page-title user-page__title">Error 404: Not Found</h1>
      </header>

      <div className="sign-in user-page__content">
        <p className="page-title user-page__title">We are really sorry, but page not found</p>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
