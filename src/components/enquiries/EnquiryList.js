import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL, ENQUIRY } from "../../constants/api";
import EnquiryItem from "./EnquiryItem";

const url = BASE_URL + ENQUIRY;

export default function EnquiryList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getEnquiries() {
      try {
        const response = await http.get(url);
        setEnquiries(response.data);
      } catch (error) {
        console.log(error);
        setError("Could not load enquiries.");
      } finally {
        setLoading(false);
      }
    }

    getEnquiries();
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
      {enquiries.data.map(function (enquiry) {
        const { id, attributes } = enquiry;
        return (
          <EnquiryItem
            key={id}
            id={id}
            accommodation_name={attributes.accommodation_name}
            email={attributes.email}
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
