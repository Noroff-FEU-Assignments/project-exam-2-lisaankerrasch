import React from "react";
import frontImage from "../../images/holidaze5.jpg";

export default function HomePage() {
  return (
    <div>
      <section className="section accommodation__section__1">
        <div className="container">
          <img
            className="container__image"
            src={frontImage}
            alt="Hotel Lobby"
          ></img>
        </div>
      </section>
      <section className="section accommodation__section__2">
        <div className="container accommodation__section__flex">
          <div className="filter-buttons">
            <button className="filter-buttons__button">Hotels</button>
            <button className="filter-buttons__button">Guesthouses</button>
            <button className="filter-buttons__button">B&Bs</button>
          </div>
          <div className="search-bar">
            <input
              className="search"
              type="search"
              id="search"
              name="search"
              placeholder="Type here..."
            ></input>
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>
      <section className="section accommodation__section__3">
        <div className="container">
          <div className="accommodation__section__flex"></div>
        </div>
      </section>
    </div>
  );
}
