export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/review',
  Player = '/player',
  Id = '/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_MAX = 10;

export const FilmScores: {
  from: number;
  to: number;
  score: string;
}[] = [
  {
    from: 0,
    to: 3,
    score: 'Bad',
  },
  {
    from: 3,
    to: 5,
    score: 'Normal',
  },
  {
    from: 5,
    to: 8,
    score: 'Good',
  },
  {
    from: 8,
    to: 10,
    score: 'Very good',
  },
  {
    from: 10,
    to: 10,
    score: 'Awesome',
  },
];

export const PLAYER_DELAY = 1000;
export const MINUTES_IN_HOUR = 60;

export enum FilmTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
