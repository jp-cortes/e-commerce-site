import React, { useRef } from 'react';
import '@styles/Login.scss';
import Logo from '@logos/logo_yard_sale.svg';


const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData =  new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    } 
    console.log(data);
  }
    return (
      <>
        <main className="login-user">
          <section className="form-container">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />

            <form action="/" className="login-form" ref={form}>
              <label htmlfor="log-user" className="login-label">
                User email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email@example.com"
                className="login-input input-password-log"
                required
              />
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="login-input input-password-log"
                required
              />

              <button 
              onClick={handleSubmit}
              className="login-button login-button"
              >
                Log in
                </button>
              <a href="/">Forgot password</a>
            </form>
            <button className="secondary-button">Sign up</button>
          </section>
        </main>
      </>
    );

     
}

export default Login;