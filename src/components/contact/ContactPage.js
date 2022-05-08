import React from "react";
import streettraffic from "../../images/holidaze2.jpg";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="section contact__section__1">
        <div className="container">
          <img
            className="container__image container__image--overlay"
            src={streettraffic}
            alt="Rainy street"
          ></img>
        </div>
      </section>
      <section className="overlay">
        <div className="overlay__container">
          <h2 className="form-header">Contact us</h2>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
