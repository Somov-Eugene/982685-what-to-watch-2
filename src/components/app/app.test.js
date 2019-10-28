import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';
import App from './app';

describe(`Проверка <App>`, () => {
  it(`компонент <App> корректно отрисован`, () => {
    const tree = renderer
      .create(<App
        movies = {films}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
