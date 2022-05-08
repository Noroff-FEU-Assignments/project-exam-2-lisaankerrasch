import PropTypes from "prop-types";

function EnquiryItem({
  id,
  first_name,
  last_name,
  arrival_date,
  departure_date,
  number_of_people,
  message,
  accommodation_name,
  email,
}) {
  return (
    <div className="admin__item">
      <p>Accommodation name: {accommodation_name} </p>
      <p>Email: {email}</p>
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>Number of people: {number_of_people}</p>
      <p>Arrival date: {arrival_date}</p>
      <p>Departure date: {departure_date}</p>
      <p>Message: {message}</p>
    </div>
  );
}

EnquiryItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EnquiryItem;
