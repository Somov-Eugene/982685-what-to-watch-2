import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {movie, onLinkClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onLinkClick}>{movie.name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  onLinkClick: PropTypes.func
};

export default SmallMovieCard;
