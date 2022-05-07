import React from "react";
import streettraffic from "../../images/holidaze2.jpg";
import LoginForm from "./LoginForm";
export default function LoginPage() {
  return (
    <div>
      <section className="section login__section__1">
        <div className="container">
          <img
            className="container__image container__image--overlay"
            src={streettraffic}
            alt="Rainy street"
          ></img>
        </div>
      </section>
      <section className="overlay">
        <div className="overlay__container login">
          <h1 className="form-header--login">Log in</h1>
          <p>For admins of Holidaze only.</p>
          <p className="login__p">
            Use the username and password provided from your supervisor.{" "}
          </p>

          <div className="login__form">
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
}
