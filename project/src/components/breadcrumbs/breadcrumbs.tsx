import { Link } from 'react-router-dom';
import { FilmType } from '../../types/films';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  film: FilmType;
};

function Breadcrumbs({ film }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`${AppRoute.Film}/${film.id}`}>{film.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`${AppRoute.AddReview}/${film.id}`}>Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
