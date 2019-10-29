import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleLinkClick = this._handleLinkClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
  }

  _handleLinkClick() {
  }

  _handleMouseEnter(currentMovieCard) {
    this.setState({
      activeCard: currentMovieCard
    });
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => <SmallMovieCard
            movie = {movie}
            onLinkClick = {() => this._handleLinkClick()}
            onMouseEnter = {() => this._handleMouseEnter(movie)}
            key = {movie.id}
          />)
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MoviesList;
