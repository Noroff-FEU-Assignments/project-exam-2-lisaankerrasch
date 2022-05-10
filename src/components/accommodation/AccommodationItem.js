import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function AccommodationItem({
  id,
  name,
  short_description,
  image,
  type,
  price,
}) {
  return (
    <div className="accommodation__item">
      <img className="accommodation__image" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="bold">{type}</p>
      <p>{short_description}</p>
      <p>Price per night: {price} NOK</p>

      <NavLink to={`details/${id}`} className="accommodation__link">
        Read More...
      </NavLink>
    </div>
  );
}

AccommodationItem.propTypes = {
  id: PropTypes.number.isRequired,
};
