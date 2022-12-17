import React from "react";
import '@styles/CreateAccount.scss';


const CreateAccount = () => {
    return (
      <>
        <main className="create-account">
          <section className="form-account">
            <h1 className="title-account">My account</h1>
            <div className="responsive-page4">
              <form action="/" className="form-name">
                <label for="name" className="label-name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  className="input-name input-name-account"
                />
              </form>

              <form action="/" className="form-email">
                <label for="email" className="label-email">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email@example.com"
                  className="input-email input-email-account"
                />
              </form>

              <form action="/" className="form-account">
                <label for="password" className="label-account-password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="input-account-password input-password-account"
                />
              </form>
            </div>

            <input
              type="submit"
              value="Create"
              className="create-accountButton create-button"
            />
          </section>
        </main>
      </>
    );
}

export default CreateAccount;