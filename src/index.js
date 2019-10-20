import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const moviesList = [{name: `Fantastic Beasts`}, {name: `Bohemian Rhapsody`}, {name: `Macbeth`}];

  ReactDOM.render(
      <App
        moviesList = {moviesList}
      />,
      document.querySelector(`#root`)
  );
};

init();
