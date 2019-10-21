import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";

describe(`Проверка <SmallMovieCard>`, () => {
  it(`компонент <SmallMovieCard> корректно отрисован`, () => {
    const movie = {name: `Fantastic Beasts`};

    const tree = renderer
      .create(<SmallMovieCard
        movie = {movie}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
