import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import * as yup from "yup";
// import FormError from "../common/FormError";
// import useAxios from "../hooks/useAxios";
import { BASE_URL, MESSAGE } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";
import axios from "axios";

const url = BASE_URL + MESSAGE;

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

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();

  const { register } = useForm();

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    setSucccess(null);

    data.status = "publish";

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      history("/contact");
      setSucccess(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  function validateForm() {
    if (document.contactForm.data.first_name.value === "") {
      alert("Please provide your name!");
      document.myForm.Name.focus();
      return false;
    }
  }
  return (
    <form name="contactForm" onSubmit={validateForm(onSubmit)}>
      {success && <FormSuccess>Your message is sent!</FormSuccess>}

      {serverError && (
        <ServerError>Something went wrong. Please try again.</ServerError>
      )}

      <div className="contact__flex">
        <div className="contact__flex--1">
          <div className="contact__flex--1-1">
            <input
              name="fname"
              placeholder="First name"
              className="contact-input"
              {...register("data.first_name")}
            />
            {/* {errors.first_name && (
              <FormError>{errors.first_name.message}</FormError>
            )}{" "} */}
            <input
              placeholder="Last name"
              className="contact-input"
              {...register("data.last_name")}
            />
            {/* {errors.lastname && (
              <FormError>{errors.lastname.message}</FormError>
            )} */}
          </div>
          <input
            placeholder="Phone number"
            className="contact-input"
            {...register("data.phone")}
          />
          {/* {errors.first_name && <FormError>{errors.phone.message}</FormError>} */}
          <input
            placeholder="Email"
            className="contact-input"
            {...register("data.email")}
          />
          {/* {errors.first_name && <FormError>{errors.email.message}</FormError>}{" "} */}
        </div>
        <div className="contact__flex--2">
          <textarea
            placeholder="Message"
            className="contact-textarea"
            {...register("data.message")}
          />
          {/* {errors.first_name && <FormError>{errors.message.message}</FormError>}{" "} */}
        </div>
      </div>
      <div className="contact-button">
        <button className="contact-button">
          {submitting ? "Sending message..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
