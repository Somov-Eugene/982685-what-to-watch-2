import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';
import MoviesList from './movies-list';

describe(`Проверка <MoviesList>`, () => {
  it(`компонент <MoviesList> корректно отрисован`, () => {
    const tree = renderer
      .create(<MoviesList
        movies = {films}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
