import { useState, useEffect } from "react";
import { API_URL } from "../../constants/api";
import AccommodationItem from "./AccommodationItem";

function AccommodationList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();
          setAccommodations(json);
        } else {
          setError("Something happened :( ");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="accommodation">
      {accommodations.data.map(function (accommodation) {
        const { id, attributes } = accommodation;
        return (
          <AccommodationItem
            key={id}
            id={id}
            name={attributes.name}
            type={attributes.type}
            description={attributes.description}
            price={attributes.price}
            nearby_facilities={attributes.nearby_facilities}
            breakfast={attributes.breakfast}
            number_of_people={attributes.number_of_people}
            website={attributes.website}
            image={attributes.image.data.attributes.formats.large.url}
          />
        );
      })}
    </div>
  );
}

export default AccommodationList;