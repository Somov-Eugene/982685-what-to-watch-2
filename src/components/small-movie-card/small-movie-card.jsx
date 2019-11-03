import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

class SmallMovieCard extends React.PureComponent {

  constructor(props) {
    super(props);

    this._timerId = null;
    this.PLAY_DELAY = 1000;

    this.state = {
      isPreviewPlaying: false
    };

    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
    this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);
  }

  render() {
    const {movie, onLinkClick} = this.props;
    const width = 280;
    const height = 175;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMovieCardMouseEnter}
        onMouseLeave={this.handleMovieCardMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src = {movie.preview}
            poster = {movie.poster}
            muted = {true}
            width = {width}
            height = {height}
            isPlaying = {this.state.isPreviewPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onLinkClick}>{movie.name}</a>
        </h3>
      </article>
    );
  }

  handleMovieCardMouseEnter() {
    this.props.onMouseEnter(this.props.movie);

    const cbSetStatePlaying = () => this.setState({isPreviewPlaying: true});
    this._timerId = setTimeout(cbSetStatePlaying, this.PLAY_DELAY);
  }

  handleMovieCardMouseLeave() {
    if (this._timerId) {
      this.setState({isPreviewPlaying: false});
      clearTimeout(this._timerId);
    }
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  onLinkClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default SmallMovieCard;
