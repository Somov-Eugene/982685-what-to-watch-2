import { MINUTES_IN_HOUR } from '../../const';
import { FilmType } from '../../types/films';
import { starringList } from '../../utils/utils';

type FilmTabDetailsProps = {
  film: FilmType;
}

function FilmTabDetails({ film }: FilmTabDetailsProps): JSX.Element {
  const { runTime, genre, released, director, starring } = film;

  const runTimeFormatted = `${Math.floor(runTime / MINUTES_IN_HOUR)}h ${runTime % MINUTES_IN_HOUR}m`;

  const listActors = starringList(starring, ', ');

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {listActors}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTimeFormatted}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabDetails;
