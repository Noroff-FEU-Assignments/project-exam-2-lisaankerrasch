import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, ENQUIRY } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";
import { useForm } from "react-hook-form";

export default function AddEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();

  const url = BASE_URL + ENQUIRY;

  const { register, handleSubmit } = useForm();

  async function onSubmit(accommodation) {
    setSubmitting(true);
    setServerError(null);
    setSucccess(null);

    console.log(accommodation);

    accommodation.status = "publish";

    try {
      const response = await axios.post(url, accommodation);
      console.log("response", response.data);
      history("/enquiries/:id");
      setSucccess(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {success && (
        <FormSuccess>
          Your enquiry has been sent! Please check you email.
        </FormSuccess>
      )}

      {serverError && (
        <ServerError>Please fill out all required fields.</ServerError>
      )}

      <fieldset disabled={submitting}>
        <div className="enquiry__flex">
          <input
            name="data.accommodation_name"
            className="enquiry-input"
            placeholder="Accommodation name (Optional)"
            {...register("data.accommodation_name")}
          />

          <div className="enquiry__flex--1">
            <div>
              <input
                name="first_name"
                placeholder="First name (required)"
                className="enquiry-input input-narrow"
                {...register("data.first_name")}
              />
            </div>
            <div>
              <input
                name="last_name"
                placeholder="Last name (required)"
                className="enquiry-input input-narrow"
                {...register("data.last_name")}
              />
            </div>
          </div>
          <input
            name="email"
            placeholder="Email (required)"
            className="enquiry-input"
            {...register("data.email")}
          />
          <div className="enquiry__flex--2">
            <div>
              <input
                name="arrival_date"
                placeholder="Date of arrival"
                type="date"
                className="enquiry-input input-narrow"
                {...register("data.arrival_date")}
              />
            </div>
            <div>
              <input
                name="departure_date"
                placeholder="Date of departure"
                type="date"
                className="enquiry-input input-narrow"
                {...register("data.departure_date")}
              />
            </div>
          </div>
          <input
            name="number_of_people"
            placeholder="Number of people (required)"
            className="enquiry-input"
            {...register("data.number_of_people")}
          />
          <input
            name="Message"
            placeholder="Message (optional)"
            className="enquiry-input"
            {...register("data.message")}
          />
        </div>
        <div className="enquiry-button">
          <button className="enquiry-button">
            {submitting ? "Sending request" : "Send request"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
