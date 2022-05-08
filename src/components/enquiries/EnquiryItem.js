import PropTypes from "prop-types";

function EnquiryItem({
  id,
  first_name,
  last_name,
  arrival_date,
  departure_date,
  number_of_people,
  message,
}) {
  return (
    <div className="enquiry__item">
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>Number of people: {number_of_people}</p>
      <p>arrival date: {arrival_date}</p>
      <p>departure date: {departure_date}</p>
      <p>Message: {message}</p>
    </div>
  );
}

EnquiryItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EnquiryItem;
