import { useAppDispatch } from '../../hooks';
import { incementQtyFilms } from '../../store/actions';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleMoreButtonClick = () => {
    dispatch(incementQtyFilms());
  };

  return (
    <div className="catalog__more" onClick={handleMoreButtonClick}>
      <button className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
