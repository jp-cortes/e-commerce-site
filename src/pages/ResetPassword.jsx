import React from "react";
import '@styles/ResetPasswords';
import Logo from '@logos/logo_yard_sale.svg';

const ResetPassword = () => {
    return (
      <>
        <main className="forgot-password">
          <section className="form-container">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
              <label for="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
              />
            </form>

            <form action="/" className="form">
              <label for="new-password" className="label">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                placeholder="*********"
                className="input input-password"
              />

              <input
                type="submit"
                value="Confirm"
                className="primary-button login-button1"
              />
            </form>
          </section>
        </main>
      </>
    );
} 
export default ResetPassword;