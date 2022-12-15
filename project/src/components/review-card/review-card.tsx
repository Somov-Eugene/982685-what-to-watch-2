import { ReviewType } from '../../types/reviews';
import { reviewDateFormat } from '../../utils/utils';

type FilmTabReviewsProps = {
  review: ReviewType;
}

function ReviewCard({ review }: FilmTabReviewsProps): JSX.Element {
  const { comment, user, date, rating } = review;

  const reviewDate = reviewDateFormat(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{reviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewCard;
