import { useState, useEffect } from "react";
import { BASE_URL, MESSAGE } from "../../constants/api";
import MessageItem from "./MessageItem";

function MessageList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + MESSAGE);

        if (response.ok) {
          const json = await response.json();
          setMessages(json);
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
    <div className="message">
      {messages.data.map(function (message) {
        const { id, attributes } = message;
        return (
          <MessageItem
            key={id}
            id={id}
            first_name={attributes.first_name}
            last_name={attributes.last_name}
            email={attributes.email}
            message={attributes.message}
            phone={attributes.phone}
          />
        );
      })}
    </div>
  );
}

export default MessageList;
