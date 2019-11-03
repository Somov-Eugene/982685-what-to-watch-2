import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  render() {
    const {src, poster, muted, width, height} = this.props;

    return <video
      src = {src}
      poster = {poster}
      muted = {muted}
      width = {width}
      height = {height}
      ref = {this._videoRef}
    />;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
