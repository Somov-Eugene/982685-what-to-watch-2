import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {movies} = props;

  return <MainPage
    movies = {movies}
  />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
