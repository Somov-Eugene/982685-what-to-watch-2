import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";

describe(`Проверка <MainPage>`, () => {
  it(`компонент <MainPage> корректно отрисован`, () => {
    const moviesList = [{name: `Fantastic Beasts`}, {name: `Bohemian Rhapsody`}, {name: `Macbeth`}];

    const tree = renderer
      .create(<MainPage
        movies = {moviesList}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
