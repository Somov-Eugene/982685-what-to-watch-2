import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <SmallMovieCard>`, () => {
  it(`click по заголовку с названием фильма`, () => {
    const movie = {
      name: `Fantastic Beasts`
    };
    const handlerLinkClick = jest.fn();

    const movieCard = shallow(<SmallMovieCard
      movie = {movie}
      onLinkClick = {handlerLinkClick}
    />);

    const link = movieCard.find(`.small-movie-card__link`);
    link.simulate(`click`);

    expect(handlerLinkClick).toHaveBeenCalledTimes(1);
  });
});
