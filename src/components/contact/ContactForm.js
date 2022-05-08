import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "The first name must be at least 3 characters"),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(4, "The first name must be at least 4 characters"),
  phone: yup
    .number()
    .required("Please enter your phone number")
    .min(6, "This is not a valid number!"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="contact__flex">
        <div className="contact__flex--1">
          <div className="contact__flex--1-1">
            <input
              placeholder="First name"
              className="contact-input"
              {...register("firstname")}
            />
            {errors.firstname && <span>{errors.firstname.message}</span>}

            <input
              placeholder="Last name"
              className="contact-input"
              {...register("lastname")}
            />
            {errors.lastname && <span>{errors.lastname.message}</span>}
          </div>

          <input
            placeholder="Phone number"
            className="contact-input"
            {...register("phone")}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <input
            placeholder="Email"
            className="contact-input"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="contact__flex--2">
          <textarea
            placeholder="Message"
            className="contact-textarea"
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
      </div>
      <div className="contact-button">
        <button className="contact-button">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
