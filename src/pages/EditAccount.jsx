import React from "react";
import '@styles/EditAccount.scss';

const EditAccount = () => {
    return (
      <>
        <main className="edit-account">
          <section className="form-edit-account">
            <h1 className="title-edit-account">My account</h1>
            <div className="responsive-page5">
              <form action="/" className="form-edit-name">
                <label for="edit-name" className="label-edit-name">
                  Name
                </label>
                <p className="value">Terry Bogard</p>
              </form>

              <form action="/" className="form-edit-email">
                <label for="edit-email" className="label-edit-email">
                  Email address
                </label>
                <p className="value">fatalfury@kof.com</p>
              </form>

              <form action="/" className="form-edit-password">
                <label for="edit-password" className="label-edit-password">
                  Password
                </label>
                <p className="value">********</p>
              </form>
            </div>

            <input
              type="submit"
              value="Edit"
              className="edit-accountButton edit-button"
            />
          </section>
        </main>
      </>
    );
}
export default EditAccount;