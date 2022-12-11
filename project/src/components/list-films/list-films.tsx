import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmsType } from '../../types/films';

type ListFilmsProps = {
  films: FilmsType;
}

function ListFilms({ films }: ListFilmsProps): JSX.Element {
  const [, setActiveFilmId] = useState<number | undefined>(undefined);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          handleMouseEnter={() => setActiveFilmId(film.id)}
          handleMouseLeave={() => setActiveFilmId(undefined)}
        />)
      )}
    </div>
  );
}

export default ListFilms;
