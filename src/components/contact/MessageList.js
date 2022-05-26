import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import MessageItem from "../contact/MessageItem";
import { MESSAGE, BASE_URL } from "../../constants/api";

const url = BASE_URL + MESSAGE;

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMessages() {
      try {
        const response = await http.get(url);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
        setError("Could not load messages.");
      } finally {
        setLoading(false);
      }
    }

    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className="admin__flex">
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
