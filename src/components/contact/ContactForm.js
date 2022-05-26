import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, MESSAGE } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";
import axios from "axios";

const url = BASE_URL + MESSAGE;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();

  const { register, handleSubmit } = useForm();

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

  return (
    <form name="contactForm" onSubmit={handleSubmit(onSubmit)}>
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
            <input
              placeholder="Last name"
              className="contact-input"
              {...register("data.last_name")}
            />
          </div>
          <input
            placeholder="Phone number"
            className="contact-input"
            {...register("data.phone")}
          />
          <input
            placeholder="Email"
            className="contact-input"
            {...register("data.email")}
          />
        </div>
        <div className="contact__flex--2">
          <textarea
            placeholder="Message"
            className="contact-textarea"
            {...register("data.message")}
          />
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
