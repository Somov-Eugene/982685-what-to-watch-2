import MainPage from '../../pages/main-page/main-page';
import { promoFilmType } from '../../types/films';

type AppProps = {
  promo: promoFilmType;
}

function App({ promo }: AppProps): JSX.Element {
  return (
    <MainPage promo={promo} />
  );
}

export default App;
