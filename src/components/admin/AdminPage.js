import React from "react";
import AddAccommodation from "../accommodation/AddAccommodation";
import MessageList from "../contact/MessageList";
import EnquiryList from "../enquiries/EnquiryList";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function AdminPage() {
  const [auth] = useContext(AuthContext);

  if (auth === null) {
    window.location.href = "/login";
  }

  return (
    <>
      <section className="section admin__section">
        <div className="container">
          <h2>Messages</h2>
          <MessageList />
          <h2>Enquiries</h2>
          <EnquiryList />
          <h2>Add accommodation</h2>
          <AddAccommodation />
        </div>
      </section>
    </>
  );
}
