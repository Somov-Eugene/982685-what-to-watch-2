import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { redirect } from 'react-router-dom';
import { AppRoute, RATING_MAX } from '../../const';

type AddReviewFormProps = {
  filmId: number;
};

function AddReviewForm({ filmId }: AddReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = +evt.target.value;
    setFormData({ ...formData, rating: value });
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setFormData({ ...formData, comment: value });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    redirect(`${AppRoute.Film}/${filmId}`);
  };

  return (
    <div className="add-review">
      <form
        className="add-review__form"
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: RATING_MAX }, (_, value) => {
              const id = `star-${RATING_MAX - value}`;
              return (
                <Fragment key={id}>
                  <input
                    className="rating__input"
                    type="radio"
                    name="rating"
                    id={id}
                    value={value}
                    onChange={handleRatingChange}
                    checked={formData.rating === value}
                  />
                  <label
                    className="rating__label"
                    htmlFor={id}
                  >
                    Rating {value}
                  </label>
                </Fragment>);
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleCommentChange}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
