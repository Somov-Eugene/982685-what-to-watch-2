import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/index';
import { mockPromo, mockFilms } from './mocks/films';
import { mockReviews } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promo={mockPromo} films={mockFilms} reviews={mockReviews} />
    </Provider>
  </React.StrictMode>
);
