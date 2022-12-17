import React from "react";
import '@styles/RecoveryPassword.scss';
import EmailSvg from '@logos/email.svg';
import Logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
    return (
      <>
        <main className="login-email">
          <section className="form-container-email">
            <img
              src={Logo}
              alt="logo"
              className="logo"
            />
            <h1 className="title-email">Email has been sent!</h1>
            <p className="subtitle-email">
              Please check your inbox for instruction on how to reset the
              password
            </p>

            <div className="email-image">
              <img src={EmailSvg} alt="email-icon" />
            </div>
            <button className="primary-email-button login-email-button">
              Login
            </button>

            <p className="resend">
              <span>Didn't receive the email?</span>
              <a href="/">Resend</a>
            </p>
          </section>
        </main>
      </>
    );
}

export default RecoveryPassword;