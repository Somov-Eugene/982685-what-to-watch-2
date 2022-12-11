import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockPromo, mockFilms } from './mocks/films';
import { mockReviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promo={mockPromo} films={mockFilms} reviews={mockReviews} />
  </React.StrictMode>
);
