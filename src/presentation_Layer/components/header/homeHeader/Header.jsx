import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={'/user'}>
          <img
            className="main-nav-logo-image"
            src="src/presentation_Layer/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}
