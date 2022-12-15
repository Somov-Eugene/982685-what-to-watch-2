import { FilmScores } from '../const';

export const filmRatingLevel = (rank: number): string => {
  let result = 'Unknown';

  FilmScores.forEach((rankLevel, idx) => {
    if (
      (rank >= rankLevel.from && rank < rankLevel.to) ||
      (rank === rankLevel.from && rank === rankLevel.to)
    ) {
      result = rankLevel.score;
    }
  });

  return result;
};

export const starringList = (actors: string[], separator: string): string => {
  if (actors.length === 0) {
    return '';
  }

  const result: string[] = [];

  actors.forEach((actor) => {
    result.push(actor);
    result.push(separator);
  });

  result.pop(); // removes the last separator

  return result.join('');
};

export const reviewDateFormat = (date: string): string => {
  const dt = new Date(date);
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(dt); // December 24, 2022
};
