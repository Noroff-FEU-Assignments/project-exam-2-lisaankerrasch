import React from "react";
import MessageList from "../contact/MessageList";
import EnquiryList from "../enquiries/EnquiryList";

function AdminPage() {
  return (
    <div>
      <section className="section admin__section">
        <div className="container">
          <h2>Messages</h2>
          <MessageList />
          <h2>Enquiries</h2>
          <EnquiryList />
        </div>
      </section>
    </div>
  );
}

export default AdminPage;
