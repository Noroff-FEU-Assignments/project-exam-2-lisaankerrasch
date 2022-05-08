import React from "react";
import AccommodationDetail from "./AccommodationDetail";
import breakfast from "../../images/holidaze14.jpg";
import Heading from "../layout/Heading";

export default function AccommodationDetails() {
  return (
    <div>
      <section className="section activity__section__1">
        <div className="overlay__frontpage">
          <div className="overlay__frontpage--container">
            <Heading content="Details"></Heading>
          </div>
        </div>
        <div className="container">
          <img
            className="container__image"
            src={breakfast}
            alt="breakfast"
          ></img>
        </div>
      </section>
      <section className="section details__section__2">
        <div className="container">
          <AccommodationDetail />
        </div>
      </section>
    </div>
  );
}
