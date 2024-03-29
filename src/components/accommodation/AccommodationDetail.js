import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, ACCOMMODATION_DETAIL } from "../../constants/api";
import { Link } from "react-router-dom";

function AccommodationDetail() {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + ACCOMMODATION_DETAIL + id + "?populate=*";

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setAccommodation(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return (
      <div className="container__background">
        <div className="container__content">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="accommodation__detail__1">
      <h2>{accommodation.data.attributes.name}</h2>
      <div className="details__section__flex">
        <div className="details-section__flex--1">
          <img
            className="accommodation__detail--img"
            src={
              accommodation.data.attributes.image.data.attributes.formats.large
                .url
            }
            alt={accommodation.data.attributes.name}
          ></img>
        </div>

        <div className="details-section__flex--2">
          <div>
            <p> {accommodation.data.attributes.description} </p>
          </div>
          <div className="bold">
            {" "}
            <p>Price: {accommodation.data.attributes.price} NOK per night</p>
            <p>
              Facilities nearby:{" "}
              {accommodation.data.attributes.nearby_facilities}
            </p>
            <p>
              Maximum number of people:{" "}
              {accommodation.data.attributes.number_of_people}
            </p>
            <p>{accommodation.data.attributes.breakfast}</p>
            <p>{accommodation.data.attributes.website}</p>
          </div>
          <div className="enquiry-button enquiry-button__2">
            <Link to={`/enquiries/${id}`}>
              {" "}
              <button className="enquiry-button enquiry-button__2">
                Make an enquiry
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccommodationDetail;
