import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { promoFilmType } from './types/films';

const Promo: promoFilmType = {
  id: 10,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundColor: '#AD9F8B',
  videoLink: 'https://11.react.pages.academy/static/film/video/bubbles.mp4',
  previewVideoLink: 'https://11.react.pages.academy/static/film/video/traffic.mp4',
  description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
  rating: 8.1,
  scoresCount: 808357,
  director: 'Wes Anderson',
  starring: [
    'Ralph Fiennes',
    'Mathieu Amalric',
    'Bill Murray',
  ],
  runTime: 100,
  genre: 'Drama',
  released: 2014,
  isFavorite: false
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promo={Promo} />
  </React.StrictMode>,
);
