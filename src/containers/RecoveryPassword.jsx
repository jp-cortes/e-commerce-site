import React from "react";
import '../styles/RecoveryPassword.scss'

const RecoveryPassword = () => {
    return(
        <div className="login">
    <div className="form-container">
      <img src="../styles/Logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <div className="email-image">
        <img src="../styles/Icons/email.svg" alt="email" />
      </div>

      <button className="primary-button login-button">Login</button>

      <p className="resend">
        <span> Did'nt receive the email? </span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
    )
}

export default RecoveryPassword;