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
    to: 2,
    score: 'Bad',
  },
  {
    from: 3,
    to: 4,
    score: 'Normal',
  },
  {
    from: 5,
    to: 7,
    score: 'Good',
  },
  {
    from: 8,
    to: 9,
    score: 'Very good',
  },
  {
    from: 10,
    to: 10,
    score: 'Awesome',
  },
];

export const PLAYER_DELAY = 1000;
