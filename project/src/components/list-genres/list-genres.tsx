import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre } from '../../store/actions';
import { getListGenres } from '../../utils/utils';
import { Genres } from '../../const';

function ListGenres(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);

  const genres = getListGenres(films);

  const handleGenreClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    const genre = evt.currentTarget.text as Genres;
    dispatch(changeGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item${genre === selectedGenre ? ' catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <Link
            className="catalog__genres-link"
            to=""
            onClick={handleGenreClick}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListGenres;
