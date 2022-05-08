import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import useAxios from "../hooks/useAxios";

const schema = yup.object().shape({
  accommodation_name: yup.string().required("Accommodation name is required"),
});

export default function AddAccommodation() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

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
    setServerError(null);

    data.status = "published";

    if (data.featured_media === "") {
      data.featured_media = null;
    }

    console.log(data);

    try {
      const response = await http.post("/api/accommodation", data);
      console.log("response", response.data);
      history("/admin");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input
              name="accommodation_name"
              placeholder="Accommodation name (required)"
              {...register("accommodation_name")}
            />

            {errors.accommodation_name && (
              <FormError>{errors.accommodation_name.message}</FormError>
            )}
          </div>

          {/* <div>
            <textarea
              name="excerpt"
              placeholder="excerpt"
              {...register("excerpt")}
            />
            {errors.excerpt && <FormError>{errors.excerpt.message}</FormError>}
          </div> */}

          {/* <div></div> */}
          <button className="enquiry-button">
            {submitting ? "Adding..." : "Add Accommodation"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
