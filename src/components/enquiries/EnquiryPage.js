import React from "react";
import AddEnquiry from "./AddEnquiry";
import blueroom from "../../images/holidaze6.jpg";

export default function EnquiryPage() {
  return (
    <div>
      <section className="section login__section__1">
        <div className="container">
          <img
            className="container__image container__image--overlay--enquiry"
            src={blueroom}
            alt="Blue guestroom"
          ></img>
        </div>
      </section>
      <section className="overlay">
        <div className="overlay__container login">
          <h1 className="form-header--login form-header--enquiry">
            Check availability
          </h1>

          <div className="enquiry__form">
            <AddEnquiry />
          </div>
        </div>
      </section>
    </div>
  );
}
