import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import films from '../../mocks/films';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <SmallMovieCard>`, () => {
  it(`click по заголовку с названием фильма`, () => {
    const movie = films[0];
    const handleLinkClick = jest.fn();
    const handleMouseEnter = jest.fn();

    const movieCard = shallow(<SmallMovieCard
      movie = {movie}
      onLinkClick = {handleLinkClick}
      onMouseEnter = {handleMouseEnter}
      key = {movie.id}
    />);

    const link = movieCard.find(`.small-movie-card__link`);
    link.simulate(`click`);

    expect(handleLinkClick).toHaveBeenCalledTimes(1);
  });

  it(`наведение курсора мыши на карточку с фильмом`, () => {
    const movie = films[0];
    const handleLinkClick = jest.fn();
    const handleMouseEnter = jest.fn();

    const smallCard = shallow(<SmallMovieCard
      movie = {movie}
      onLinkClick = {handleLinkClick}
      onMouseEnter = {handleMouseEnter(movie)}
      key = {movie.id}
    />);

    smallCard.find(`.small-movie-card`).simulate(`mouseenter`);

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleMouseEnter).toHaveBeenCalledWith(movie);
  });
});
