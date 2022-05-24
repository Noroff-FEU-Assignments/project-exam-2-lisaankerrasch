import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import FormError from "../common/FormError";
import axios from "axios";
import { BASE_URL, ENQUIRY } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";

const form_accommodationName = "data.accommodation_name";

// // console.log(typeof form_accommodationName);

const schema = yup.object().shape({
  accommodation_name: yup
    .string()
    .required("Please enter the name of the accommodation you wish to stay at")
    .min(2, "The accommodation name must be at least 2 characters"),
  // first_name: yup
  //   .string()
  //   .required("Please enter your last name")
  //   .min(2, "Last name must be at least 2 characters"),
  // last_name: yup
  //   .string()
  //   .required("Please enter your last name")
  //   .min(2, "Last name must be at least 2 characters"),
  // arrival_date: yup
  //   .date()
  //   .required("Please enter an arrival date")
  //   .nullable()
  //   .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
  // departure_date: yup
  //   .date()
  //   .required("Please enter an arrival date")
  //   .nullable()
  //   .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
  // phone: yup
  //   .number()
  //   .required("Please enter your phone number")
  //   .min(6, "This is not a valid phone number!"),
  // email: yup
  //   .string()
  //   .required("Please enter an email address")
  //   .email("Please enter a valid email address"),
  // number_of_people: yup
  //   .number()
  //   .required("Please provide number of guest")
  //   .transform((value) => (isNaN(value) ? undefined : value))
  //   .nullable(),
});

export default function AddEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();

  const url = BASE_URL + ENQUIRY;

  const {
    register,
    handleSubmit,
    formState: { errors },
    // } = useForm({
    //   resolver: yupResolver(schema),
    // });
  } = useForm({});

  async function onSubmit(accommodation) {
    setSubmitting(true);
    setServerError(null);
    setSucccess(null);

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
        <ServerError>Something went wrong. Please try again.</ServerError>
      )}

      <fieldset disabled={submitting}>
        <div className="enquiry__flex">
          <input
            name="accommodation_name"
            defaultValue={""}
            className="enquiry-input"
            placeholder="Accommodation name (required)"
            {...register(form_accommodationName, { required: true })}
          />
          {errors.accommodation_name && <span>This field is required</span>}

          <div className="enquiry__flex--1">
            <div>
              <input
                placeholder="First name (required)"
                className="enquiry-input input-narrow"
                {...register("first_name")}
              />
              {errors.first_name && (
                <FormError>{errors.first_name.message}</FormError>
              )}
            </div>
            <div>
              <input
                placeholder="Last name (required)"
                className="enquiry-input input-narrow"
                {...register("last_name")}
              />
              {errors.last_name && (
                <FormError>{errors.last_name.message}</FormError>
              )}
            </div>
          </div>
          <input
            placeholder="Email"
            className="enquiry-input"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
          <div className="enquiry__flex--2">
            <div>
              <input
                placeholder="Date of arrival"
                type="date"
                className="enquiry-input input-narrow"
                {...register("arrival_date")}
              />
              {errors.arrival_date && (
                <FormError>{errors.arrival_date.message}</FormError>
              )}
            </div>
            <div>
              <input
                placeholder="Date of departure"
                type="date"
                className="enquiry-input input-narrow"
                {...register("departure_date")}
              />
              {errors.departure_date && (
                <FormError>{errors.departure_date.message}</FormError>
              )}
            </div>
          </div>
          <input
            placeholder="Number of people"
            input
            className="enquiry-input"
            {...register("number_of_people")}
          />
          {errors.number_of_people && (
            <FormError>{errors.number_of_people.message}</FormError>
          )}

          <input
            placeholder="Message (optional)"
            input
            className="enquiry-input"
            {...register("message")}
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
