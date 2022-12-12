import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { FilmType } from '../../types/films';
import { AppRoute } from '../../const';

type FilmCardProps = {
  film: FilmType;
  isRunPreview: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleFilmCardClick: () => void;
}

function FilmCard({ film, isRunPreview, handleMouseEnter, handleMouseLeave, handleFilmCardClick }: FilmCardProps): JSX.Element {
  const { id, name, posterImage } = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFilmCardClick}
    >
      <div className="small-film-card__image">
        {
          isRunPreview
            ? <VideoPlayer film={film} />
            : <img src={posterImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
