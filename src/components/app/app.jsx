import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {moviesList} = props;

  return <MainPage
    movies = {moviesList}
  />;
};

App.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
  )
};

export default App;
