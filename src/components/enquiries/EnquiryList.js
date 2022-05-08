import { useState, useEffect } from "react";
import { BASE_URL, ENQUIRY } from "../../constants/api";
import EnquiryItem from "./EnquiryItem";

function EnquiryList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + ENQUIRY);

        if (response.ok) {
          const json = await response.json();
          setEnquiries(json);
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
    <div className="enquiry">
      {enquiries.data.map(function (enquiry) {
        const { id, attributes } = enquiry;
        return (
          <EnquiryItem
            key={id}
            id={id}
            first_name={attributes.first_name}
            last_name={attributes.last_name}
            arrival_date={attributes.arrival_date}
            departure_date={attributes.departure_date}
            message={attributes.message}
            number_of_people={attributes.number_of_people}
          />
        );
      })}
    </div>
  );
}

export default EnquiryList;
