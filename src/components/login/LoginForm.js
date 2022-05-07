// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//   username: yup
//     .string()
//     .required("Please enter your username")
//     .min(3, "Username must be at least 3 characters"),
//   password: yup
//     .string()
//     .required("Please enter your password")
//     .min(4, "Password must be at least 4 characters"),
// });

// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   function onSubmit(data) {
//     console.log(data);
//   }

//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="login__flex">
//         <input
//           placeholder="Username"
//           className="login-input"
//           {...register("username")}
//         />
//         {errors.username && <span>{errors.username.message}</span>}

//         <input
//           placeholder="Password"
//           className="login-input"
//           type="password"
//           {...register("password")}
//         />
//         {errors.password && <span>{errors.password.message}</span>}
//       </div>
//       <button className="login-button">Submit</button>
//     </form>
//   );
// }

// export default LoginForm;

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
console.log(url);

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
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
      console.log("response", response.data);
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
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {loginError && <FormError>{loginError}</FormError>}
    //   <fieldset disabled={submitting}>
    //     <div>
    //       <input
    //         name="username"
    //         placeholder="Username"
    //         {...register("username")}
    //       />
    //       {errors.username && <FormError>{errors.username.message}</FormError>}
    //     </div>

    //     <div>
    //       <input
    //         name="password"
    //         placeholder="password"
    //         {...register("password")}
    //       />

    //       {errors.password && <FormError>{errors.password.message}</FormError>}
    //     </div>
    //     <button className="login-button">
    //       {submitting ? "Loggin in..." : "Login"}
    //     </button>
    //   </fieldset>
    // </form>

    <form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <FormError>{loginError}</FormError>}
      <fieldset disabled={submitting}>
        <div className="login__flex">
          <input
            placeholder="Username"
            className="login-input"
            {...register("username")}
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}

          <input
            placeholder="Password"
            className="login-input"
            type="password"
            {...register("password")}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </div>
        <button className="login-button">Log in</button>
      </fieldset>
    </form>
  );
}
