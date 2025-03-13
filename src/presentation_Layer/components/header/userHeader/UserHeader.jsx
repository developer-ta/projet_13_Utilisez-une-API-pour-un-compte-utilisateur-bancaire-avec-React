import { Link } from 'react-router-dom';
import './UserHeader.scss';
import { useSelector } from 'react-redux';

export default function UserHeader() {
  const { userProfile } = useSelector((state) => state.UserProfileReducer);
  const { firstName } = userProfile;
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="src/presentation_Layer/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {' ' + firstName}
          </Link>
          <Link className="main-nav-item" to="/home">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
    </>
  );
}
