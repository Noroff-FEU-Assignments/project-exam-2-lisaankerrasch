import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../hooks/useAxios";
import { BASE_URL, ACCOMMODATION } from "../../constants/api";
import FormSuccess from "../common/FormSuccess";
import ServerError from "../common/ServerError";

const url = BASE_URL + ACCOMMODATION;

// const schema = yup.object().shape({
//   name: yup.string().required("Accommodation name is required"),
//   type: yup.string().required("Type is required"),
//   price: yup
//     .number()
//     .typeError("Must be a number!")
//     .required("price is required"),
//   number_of_people: yup
//     .number()
//     .typeError("Must be a number!")
//     .required("Number of people field is required"),
//   nearby_facilities: yup
//     .string()
//     .required("Nearby facilities field is required"),
//   breakfast: yup.string().required("Breakfast field is required"),
//   website: yup.string().required("website is required"),
//   short_description: yup.string().required("Short description is required"),
//   description: yup.string().required("Description is required"),
// });

export default function AddAccommodation() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [success, setSucccess] = useState(false);

  const history = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    setSucccess(null);

    data.status = "published";

    try {
      const response = await http.post(url, data);
      console.log("response", response.data);
      history("/admin");
      setSucccess(true);
    } catch (error) {
      console.log("error", error.response.data);

      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {success && (
        <FormSuccess className="form-margin">
          Accommodation was successfully added.
        </FormSuccess>
      )}
      {serverError && (
        <ServerError className="form-margin">
          Something went wrong, not able to post accommodation.
        </ServerError>
      )}
      <fieldset disabled={submitting}>
        <div className="add-accommodation__form">
          <input
            name="name"
            className="add-accommodation-input"
            placeholder="Accommodation name (required)"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span class="form-error">Accommodation name is required</span>
          )}
          <input
            name="type"
            className="add-accommodation-input"
            placeholder="Type (required)"
            {...register("data.type", { required: true })}
          />
          {errors.type && <span class="form-error">Type is required</span>}
          <input
            name="price"
            className="add-accommodation-input"
            placeholder="Price per night (required)"
            {...register("data.price", { required: true })}
          />
          {errors.price && <span class="form-error">Price is required</span>}{" "}
          <input
            name="nearby_facilities"
            className="add-accommodation-input"
            placeholder="Nearby facilities (required)"
            {...register("data.nearby_facilities")}
          />
          {errors.nearby_facilities && (
            <span class="form-error">Nearby facilities field is required</span>
          )}{" "}
          <input
            name="breakfast"
            className="add-accommodation-input"
            placeholder="Breakfast (required)"
            {...register("data.breakfast")}
          />
          {errors.breakfast && (
            <span class="form-error">Breakfast field is required</span>
          )}
          <input
            name="number_of_people"
            className="add-accommodation-input"
            placeholder="Maximum number of people (required)"
            {...register("data.number_of_people")}
          />
          {errors.number_of_people && (
            <span class="form-error">Maximum number of people is required</span>
          )}{" "}
          <input
            name="website"
            className="add-accommodation-input"
            placeholder="Website (required)"
            {...register("data.website")}
          />
          {errors.website && (
            <span class="form-error">Website is required</span>
          )}{" "}
          <input
            name="short_description"
            className="add-accommodation-input"
            placeholder="Short description (required)"
            {...register("data.short_description")}
          />
          {errors.short_description && (
            <span class="form-error">Short description is required</span>
          )}{" "}
          <input
            name="description"
            className="add-accommodation-input"
            placeholder="Long description (required)"
            {...register("data.description")}
          />
          {errors.description && (
            <span class="form-error">Long description type is required</span>
          )}{" "}
          <input
            name="image"
            className="add-accommodation-input"
            placeholder="Image URL (required)"
            {...register("data.image_url")}
          />
          {errors.image_url && (
            <span class="form-error">Image URL is required</span>
          )}{" "}
        </div>
        <div className="accommodation-button">
          <button className="accommodation-button">
            {submitting ? "Adding..." : "Add Accommodation"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
