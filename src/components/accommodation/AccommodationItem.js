import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function AccommodationItem({
  id,
  name,
  short_description,
  image,
  type,
  price,
}) {
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  useEffect(() => {
    console.log(nameRef.current.innerHTML, typeRef.current.innerHTML);
  }, [nameRef, typeRef]);

  return (
    <div className="accommodation__item">
      <img className="accommodation__image" src={image} alt={name} />
      <h3 ref={nameRef} id="#name-ref">
        {name}
      </h3>
      <p ref={typeRef} id="#type-ref" className="bold">
        {type}
      </p>
      <p>{short_description}</p>
      <p>Price per night: {price} NOK</p>

      <NavLink to={`details/${id}`} className="accommodation__link">
        Read More...
      </NavLink>
    </div>
  );
}

// AccommodationItem.propTypes = {
//   id: PropTypes.number.isRequired,
// };
