import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>Error 404. Not found</h1>
      <p>We are really sorry, but page not found.</p>
      <Link to={AppRoute.Root}>Go to main page</Link>
    </>
  );
}

export default NotFound;
