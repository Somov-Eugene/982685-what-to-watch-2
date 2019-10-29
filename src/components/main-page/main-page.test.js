import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';
import MainPage from './main-page';

describe(`Проверка <MainPage>`, () => {
  it(`компонент <MainPage> корректно отрисован`, () => {
    const tree = renderer
      .create(<MainPage
        movies = {films}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
