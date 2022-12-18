import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import { FilmsType } from '../../types/films';
import { AppRoute, PLAYER_DELAY } from '../../const';
import { useAppSelector } from '../../hooks';

type ListFilmsProps = {
  films: FilmsType;
}

function ListFilms({ films }: ListFilmsProps): JSX.Element {
  const navigate = useNavigate();

  // State for filmId
  const [ActiveFilmId, setActiveFilmId] = useState<number | undefined>(undefined);

  // State for Hover flag
  const [isHover, setHoverCard] = useState(false);

  const qtyShowFilms = useAppSelector<number>((state) => state.QtyShowFilms);

  const listFilms = films.slice(0, qtyShowFilms).map((film) => {
    let timerId: NodeJS.Timeout;

    const handleMouseEnter = (): void => {
      setActiveFilmId(film.id);
      timerId = setTimeout(() => setHoverCard(true), PLAYER_DELAY);
    };

    const handleMouseLeave = (): void => {
      clearTimeout(timerId);
      setActiveFilmId(undefined);
      setHoverCard(false);
    };

    const handleFilmCardClick = (): void => {
      if (ActiveFilmId) {
        navigate(`${AppRoute.Film}/${ActiveFilmId}`);
      }
    };

    return (
      <FilmCard
        key={film.id}
        film={film}
        isRunPreview={isHover && film.id === ActiveFilmId}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleFilmCardClick={handleFilmCardClick}
      />
    );
  });

  return (
    <div className="catalog__films-list">
      {listFilms}
    </div>
  );
}

export default ListFilms;
