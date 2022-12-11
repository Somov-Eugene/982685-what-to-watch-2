export type ReviewType = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type ReviewsType = ReviewType[];

export type NewReviewType = Pick<ReviewType, 'comment' | 'rating'>;
