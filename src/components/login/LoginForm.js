import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      history("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <FormError>{loginError}</FormError>}
      <fieldset disabled={submitting}>
        <div className="login__flex">
          <input
            placeholder="Username"
            className="login-input"
            {...register("identifier")}
          />
          {errors.identifier && (
            <FormError>{errors.identifier.message}</FormError>
          )}

          <input
            placeholder="Password"
            className="login-input"
            type="password"
            autoComplete="on"
            {...register("password")}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </div>
        <div className="login-button">
          <button className="login-button">
            {submitting ? "Logging in..." : "Log in"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
