import { Link } from 'react-router-dom';
import './SignInContent.scss';
import useLogin from '../../../hooks/useLogin';

export default function SignInContent() {
  const { setUserLogin, messageInvalidEmail, userLogin, messageInvalideIdentifie } = useLogin();

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = e.target.elements;
          setUserLogin(formData);
        }}
      >
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div style={{ color: 'red', fontSize: '10px' }}>
          <p>{messageInvalidEmail || messageInvalideIdentifie}</p>
        </div>

        {/* <Link to="/profile" className="sign-in-button">
          Sign In
        </Link> */}

        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
}
