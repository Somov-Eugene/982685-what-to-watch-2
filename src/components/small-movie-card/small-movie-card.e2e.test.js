import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import films from '../../mocks/films';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <SmallMovieCard>`, () => {
  const movie = films[0];
  const handleLinkClick = jest.fn();
  const handleMouseEnter = jest.fn();

  const movieCard = shallow(<SmallMovieCard
    movie = {movie}
    onLinkClick = {handleLinkClick}
    onMouseEnter = {handleMouseEnter}
    key = {movie.id}
  />);

  it(`click по заголовку с названием фильма`, () => {
    movieCard.find(`.small-movie-card__link`).simulate(`click`);
    expect(handleLinkClick).toHaveBeenCalledTimes(1);
  });

  it(`наведение курсора мыши на карточку с фильмом`, () => {
    movieCard.find(`.small-movie-card`).simulate(`mouseenter`, movie);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleMouseEnter).toHaveBeenCalledWith(movie);
  });
});
