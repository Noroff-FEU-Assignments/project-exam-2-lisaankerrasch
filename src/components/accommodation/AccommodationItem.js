import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AccommodationItem({ id, name, description, image }) {
  return (
    <div className="accommodation__item">
      <img className="accommodation__image" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>

      <NavLink to={`details/${id}`} className="accommodation__link">
        Read More...
      </NavLink>
    </div>
  );
}

AccommodationItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AccommodationItem;
