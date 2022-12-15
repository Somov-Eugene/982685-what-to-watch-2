import ReviewCard from '../review-card/review-card';
import { ReviewsType } from '../../types/reviews';

type FilmTabReviewsProps = {
  reviews: ReviewsType;
}

function FilmTabReviews({ reviews }: FilmTabReviewsProps): JSX.Element {
  const reviewsLeftColumn: ReviewsType = [];
  const reviewsRightColumn: ReviewsType = [];

  reviews.forEach((review, idx) => {
    (idx + 1) % 2 ? reviewsLeftColumn.push(review) : reviewsRightColumn.push(review);
  });

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsLeftColumn.map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviewsRightColumn.map((review) => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default FilmTabReviews;
