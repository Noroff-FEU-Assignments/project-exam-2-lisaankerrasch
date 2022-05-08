import PropTypes from "prop-types";

function MessageItem({ id, first_name, last_name, email, phone, message }) {
  return (
    <div className="message__item">
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Message: {message}</p>
    </div>
  );
}

MessageItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MessageItem;
