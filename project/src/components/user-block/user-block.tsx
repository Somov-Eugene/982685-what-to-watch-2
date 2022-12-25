import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { User } from '../../types/user';
import { logoutAction } from '../../store/api-actions';
import { MouseEvent } from 'react';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user: User | undefined = useAppSelector((state) => state.userInfo);

  const handleLogoutLinkClick = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (authorizationStatus === AuthorizationStatus.Auth) ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to="" onClick={handleLogoutLinkClick}>Sign out</Link>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
    </div>
  );
}

export default UserBlock;
