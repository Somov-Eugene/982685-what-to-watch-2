import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';
import SmallMovieCard from './small-movie-card';

describe(`Проверка <SmallMovieCard>`, () => {
  it(`компонент <SmallMovieCard> корректно отрисован`, () => {
    const movie = films[0];
    const handleLinkClick = jest.fn();
    const handleMouseEnter = jest.fn();

    const tree = renderer
      .create(<SmallMovieCard
        movie = {movie}
        onLinkClick = {handleLinkClick}
        onMouseEnter = {handleMouseEnter}
        key = {movie.id}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
