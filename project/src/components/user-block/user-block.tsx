import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { User } from '../../types/user';

type UserBlockProps = {
  user: User;
};

function UserBlock({ user }: UserBlockProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to={AppRoute.Root}>Sign out</Link>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
    </div>
  );
}

export default UserBlock;
