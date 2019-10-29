import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import films from './mocks/films';

const init = (movies) => {

  ReactDOM.render(
      <App
        movies = {movies}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
