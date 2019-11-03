import React from 'react';
import renderer from 'react-test-renderer';

import films from '../../mocks/films';
import VideoPlayer from './video-player';

describe(`Проверка <VideoPlayer>`, () => {
  it(`компонент <VideoPlayer> корректно отрисован`, () => {
    const movie = films[0];
    const width = 280;
    const height = 175;

    const tree = renderer
      .create(<VideoPlayer
        src = {movie.preview}
        poster = {movie.poster}
        muted = {true}
        width = {width}
        height = {height}
        isPlaying = {true}
      />);

    expect(tree).toMatchSnapshot();
  });
});
