import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import * as yup from "yup";
import FormError from "../common/FormError";
import useAxios from "../hooks/useAxios";
import { BASE_URL, ENQUIRY } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";

// const schema = yup.object().shape({
//   first_name: yup
//     .string()
//     .required("Please enter your first name")
//     .min(3, "The first name must be at least 3 characters"),
// lastname: yup
//   .string()
//   .required("Please enter your last name")
//   .min(4, "The first name must be at least 4 characters"),
// phone: yup
//   .number()
//   .required("Please enter your phone number")
//   .min(6, "This is not a valid number!"),
// email: yup
//   .string()
//   .required("Please enter an email address")
//   .email("Please enter a valid email address"),
// message: yup
//   .string()
//   .required("Please enter your message")
//   .min(10, "The message must be at least 10 characters"),
// });

export default function AddEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();

  const http = useAxios();
  const url = BASE_URL + ENQUIRY;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    setSucccess(null);

    data.status = "publish";

    try {
      const response = await http.post(url, data);
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
        <ServerError>Something went wrong. Please try again.</ServerError>
      )}

      <fieldset disabled={submitting}>
        <div className="enquiry__flex">
          <input
            name=""
            defaultValue={""}
            className="enquiry-input"
            {...register("data.accommodation_name")}
          />
          {errors.accommodation_name && (
            <FormError>{errors.accommodation_name.message}</FormError>
          )}
          <div className="enquiry__flex--1">
            <input
              placeholder="First name"
              className="enquiry-input"
              {...register("data.first_name")}
            />
            {errors.first_name && (
              <FormError>{errors.first_name.message}</FormError>
            )}
            <input
              placeholder="Last name"
              className="enquiry-input"
              {...register("data.last_name")}
            />
            {errors.last_name && (
              <FormError>{errors.last_name.message}</FormError>
            )}
          </div>
          <input
            placeholder="Email"
            className="enquiry-input"
            {...register("data.email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
          <div className="enquiry__flex--2">
            <input
              placeholder="Date of arrival"
              type="date"
              className="enquiry-input"
              {...register("data.arrival_date")}
            />
            {errors.arrival_date && (
              <FormError>{errors.arrival_date.message}</FormError>
            )}

            <input
              placeholder="Date of departure"
              type="date"
              className="enquiry-input"
              {...register("data.departure_date")}
            />
            {errors.departure_date && (
              <FormError>{errors.departure_date.message}</FormError>
            )}
          </div>
          <input
            placeholder="Number of people"
            input
            className="enquiry-input"
            {...register("data.number_of_people")}
          />
          {errors.number_of_people && (
            <FormError>{errors.number_of_people.message}</FormError>
          )}

          <input
            placeholder="Message (optional)"
            input
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
