import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmType } from '../../types/films';

type FilmCardProps = {
  film: FilmType;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

function FilmCard({ film, handleMouseEnter, handleMouseLeave }: FilmCardProps): JSX.Element {
  const {id, name, posterImage} = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
