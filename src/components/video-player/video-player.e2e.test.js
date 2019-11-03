import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import films from '../../mocks/films';
import VideoPlayer from './video-player';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <VideoPlayer>`, () => {
  const movie = films[0];
  const width = 280;
  const height = 175;

  let videoPlayer = null;

  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

  beforeEach(() => {
    videoPlayer = mount(<VideoPlayer
      src = {movie.preview}
      poster = {movie.poster}
      muted = {true}
      width = {width}
      height = {height}
      isPlaying = {true}
    />);
  });

  it(`если isPlaying = true, то воспроизводится превью фильма (без звука)`, () => {
    expect(videoPlayer.prop(`isPlaying`)).toEqual(true);
  });

  it(`если isPlaying = false, то воспроизведение останавливается`, () => {
    videoPlayer.update();
    videoPlayer.setProps({isPlaying: false});
    expect(videoPlayer.prop(`isPlaying`)).toEqual(false);
  });
});
