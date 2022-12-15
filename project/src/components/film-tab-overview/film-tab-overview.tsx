import { filmRatingLevel, starringList } from '../../utils/utils';
import { FilmType } from '../../types/films';

type FilmTabOverviewProps = {
  film: FilmType;
}

function FilmTabOverview({ film }: FilmTabOverviewProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = film;

  const ratingLevel = filmRatingLevel(rating);
  const listActors = `${starringList(starring, ', ')} and others`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {listActors}</strong></p>
      </div>
    </>
  );
}

export default FilmTabOverview;
