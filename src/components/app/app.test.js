import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

describe(`Проверка <App>`, () => {
  it(`компонент <App> корректно отрисован`, () => {
    const moviesList = [{name: `Fantastic Beasts`}, {name: `Bohemian Rhapsody`}, {name: `Macbeth`}];

    const tree = renderer
      .create(<App
        moviesList = {moviesList}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
