import React from 'react';
import '@styles/Login.scss';
import Logo from '@logos/logo_yard_sale.svg';


const Login = () => {
    return (
      <>
        <main className="login-user">
          <section className="form-container">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />

            <form action="/" className="login-form">
              <label for="log-user" className="login-label">
                User email
              </label>
              <input
                type="text"
                id="login-email"
                placeholder="email@example.com"
                className="log-input input-password-log"
              />
            </form>

            <form action="/" className="login-form">
              <label for="login-password" className="login-label">
                Password
              </label>
              <input
                type="password"
                id="log-password"
                placeholder="*********"
                className="log-input input-password-log"
              />

              <input
                type="submit"
                value="Log in"
                className="login-button login-button"
              />
              <a href="/">Forgot password</a>
            </form>
            <button className="secondary-button">Sign up</button>
          </section>
        </main>
      </>
    );

     
}

export default Login;