// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import FormError from "../common/FormError";
// import { BASE_URL, ENQUIRY } from "../../constants/api";
// import AuthContext from "../../context/AuthContext";

// const url = BASE_URL + ENQUIRY;

// console.log(url);

// const schema = yup.object().shape({
//   accommodation_name: yup
//     .string()
//     .required("Please enter the name of the place you want to stay"),
//   first_name: yup.string().required("Please enter your first name"),
//   last_name: yup.string().required("Please enter your last name"),
//   email: yup.string().required("Please enter your email"),
//   arrival_date: yup.number().required("Please set an arrival date"),
//   departure_date: yup.number().required("Please set a departure date"),
//   number_of_people: yup.number().required("Please enter number of people"),
// });

// export default function AddEnquiry() {
//   const [submitting, setSubmitting] = useState(false);
//   const [enquiryError, setEnquiryError] = useState(null);

//   const history = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const [, setAuth] = useContext(AuthContext);

//   async function onSubmit(data) {
//     setSubmitting(true);
//     setEnquiryError(null);

//     console.log(data);
//     try {
//       const response = await axios.post(url, data);
//       console.log("response", response.data);
//       setAuth(response.data);
//       history("/");
//     } catch (error) {
//       console.log("error", error);
//       setEnquiryError(error.toString());
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {enquiryError && <FormError>{enquiryError}</FormError>}
//       <fieldset disabled={submitting}>
//         <div className="enquiry__flex">
//           <input
//             placeholder="Accommodation name"
//             className="enquiry-input"
//             {...register("accommodation_name")}
//           />
//           {errors.password && (
//             <FormError>{errors.accommodation_name.message}</FormError>
//           )}
//           <input
//             placeholder="First name"
//             className="enquiry-input"
//             {...register("first_name")}
//           />
//           {errors.password && (
//             <FormError>{errors.first_name.message}</FormError>
//           )}
//           <input
//             placeholder="Last name"
//             className="enquiry-input"
//             {...register("last_name")}
//           />
//           {errors.password && <FormError>{errors.last_name.message}</FormError>}

//           <input
//             placeholder="Email"
//             className="enquiry-input"
//             {...register("email")}
//           />
//           {errors.password && <FormError>{errors.email.message}</FormError>}

//           <input
//             placeholder="Date of arrival"
//             input
//             type="date"
//             className="enquiry-input"
//             {...register("date_of_arrival")}
//           />
//           {errors.password && (
//             <FormError>{errors.arrival_date.message}</FormError>
//           )}

//           <input
//             placeholder="Number of people"
//             input
//             className="enquiry-input"
//             {...register("number_of_people")}
//           />
//           {errors.password && (
//             <FormError>{errors.number_of_people.message}</FormError>
//           )}

//           <input
//             placeholder="Message (optional)"
//             input
//             className="enquiry-input"
//             {...register("message")}
//           />
//           {errors.password && <FormError>{errors.message.message}</FormError>}

//           <input
//             placeholder="Date of departure"
//             input
//             type="date"
//             className="enquiry-input"
//             {...register("date_of_departure")}
//           />
//           {errors.password && (
//             <FormError>{errors.departure_date.message}</FormError>
//           )}
//         </div>
//         <div className="enquiry-button">
//           <button className="enquiry-button">
//             {submitting ? "Sending request" : "Send request"}
//           </button>
//         </div>
//       </fieldset>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import useAxios from "../hooks/useAxios";

const schema = yup.object().shape({
  accommodation_name: yup
    .string()
    .required("Please enter the name of the place you want to stay"),
  //   first_name: yup.string().required("Please enter your first name"),
  //   last_name: yup.string().required("Please enter your last name"),
  //   email: yup.string().required("Please enter your email"),
  //   arrival_date: yup.date().required("Please set an arrival date"),
  //   departure_date: yup.date().required("Please set a departure date"),
  //   number_of_people: yup.number().required("Please enter number of people"),
});

export default function AddEnquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [enquiryError, setEnquiryError] = useState(null);

  const history = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setEnquiryError(null);

    data.status = "published";

    console.log(data);

    try {
      const response = await http.post("api/enquiries", data);
      console.log("response", response.data);
      history("/");
    } catch (error) {
      console.log("error", error);
      setEnquiryError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {enquiryError && <FormError>{enquiryError}</FormError>}
      <fieldset disabled={submitting}>
        <div className="enquiry__flex">
          <input
            placeholder="Accommodation name"
            className="enquiry-input"
            {...register("accommodation_name")}
          />
          {errors.accommodation_name && (
            <FormError>{errors.accommodation_name.message}</FormError>
          )}
          <input
            placeholder="First name"
            className="enquiry-input"
            {...register("first_name")}
          />
          {errors.first_name && (
            <FormError>{errors.first_name.message}</FormError>
          )}
          <input
            placeholder="Last name"
            className="enquiry-input"
            {...register("last_name")}
          />
          {errors.last_name && (
            <FormError>{errors.last_name.message}</FormError>
          )}

          <input
            placeholder="Email"
            className="enquiry-input"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}

          <input
            placeholder="Date of arrival"
            type="date"
            className="enquiry-input"
            {...register("arrival_date")}
          />
          {errors.arrival_date && (
            <FormError>{errors.arrival_date.message}</FormError>
          )}

          <input
            placeholder="Date of departure"
            type="date"
            className="enquiry-input"
            {...register("departure_date")}
          />
          {errors.departure_date && (
            <FormError>{errors.departure_date.message}</FormError>
          )}

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
