import React, { useState, useEffect } from "react";
import axios from "axios";
import frontImage from "../../images/holidaze5.jpg";
import Heading from "../layout/Heading";
import { NavLink } from "react-router-dom";

export default function AccommodationPage() {
  const [APIData, setAPIData] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://lisa-holidaze.herokuapp.com/api/accommodations`)
      .then((response) => {
        setAPIData(response.data.data);
      });
  }, []);

  const searchAccommodations = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((accommodation) => {
        return Object.values(accommodation.attributes.type)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  // const filterAccommodations = (filterValue) => {
  //   setFilterInput(filterValue);
  //   console.log(filterValue);
  //   if (filterInput !== "") {
  //     const filteredData = APIData.filter((accommodation) => {
  //       return Object.values(accommodation.attributes.type)
  //         .join("")
  //         .toLowerCase()
  //         .includes(filterInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(APIData);
  //   }
  // };

  return (
    <div>
      <section className="section accommodation__section__1">
        <div className="overlay__frontpage">
          <div className="overlay__frontpage--container">
            <Heading
              content="Accommodation"
              className="overlay__frontpage--heading"
            ></Heading>
          </div>
        </div>
        <div className="container__frontimage">
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
            <button className="filter-buttons__button" value="hotel">
              Hotels
            </button>
            <button className="filter-buttons__button" value="guesthouse">
              Guesthouses
            </button>
            <button className="filter-buttons__button" value="b&b">
              B&Bs
            </button>
          </div>
          <input
            icon="search"
            className="search"
            type="search"
            name="search"
            placeholder="Type here to search..."
            onChange={(event) => searchAccommodations(event.target.value)}
          />{" "}
        </div>
      </section>
      <section className="section accommodation__section__3">
        <div className="container">
          <div className="accommodation__section__flex"></div>
          <div className="accommodation">
            {searchInput.length > 1
              ? filteredResults.map((accommodation) => {
                  return (
                    <div key={accommodation.id} className="accommodation__item">
                      <img
                        className="accommodation__image"
                        src={accommodation.attributes.image_url}
                        alt={accommodation.attributes.name}
                      />
                      <h3>{accommodation.attributes.name}</h3>
                      <p className="bold">{accommodation.attributes.type}</p>
                      <p>{accommodation.attributes.short_description}</p>
                      <p>
                        Price per night: {accommodation.attributes.price} NOK
                      </p>

                      <NavLink
                        to={`details/${accommodation.id}`}
                        className="accommodation__link"
                      >
                        Read More...
                      </NavLink>
                    </div>
                  );
                })
              : APIData.map((accommodation) => {
                  return (
                    <div key={accommodation.id} className="accommodation__item">
                      <img
                        className="accommodation__image"
                        src={accommodation.attributes.image_url}
                        alt={accommodation.attributes.name}
                      />
                      <h3>{accommodation.attributes.name}</h3>
                      <p className="bold">{accommodation.attributes.type}</p>
                      <p>{accommodation.attributes.short_description}</p>
                      <p>
                        Price per night: {accommodation.attributes.price} NOK
                      </p>

                      <NavLink
                        to={`details/${accommodation.id}`}
                        className="accommodation__link"
                      >
                        Read More...
                      </NavLink>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
}
