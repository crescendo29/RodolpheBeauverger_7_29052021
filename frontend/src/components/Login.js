import React, { useState } from "react";
import background from "../images/icon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required("Veuillez indiquer votre Email."),
  password: yup
    .string()
    .required("Veuillez indiquer votre mot de passe.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "doit contenir au moins 8 Caractèress, 1 Majuscule, 1 Minuscule, 1 Nombre et 1 caractère spécial"
    ),
});

const Login = () => {
  const [islogged, setIslogged] = useState("false");

  const { register, handleSubmit, formState } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { isSubmitting, isSubmitted, isSubmitSuccessful, errors } = formState;

  const onSubmit = (data) => {
    AuthService.login(data.email, data.password)
      .then(() => setIslogged(true))
      .catch((error) => console.log(error));
  };

  return (
    <div className="HomePage">
      <img src={background} alt="Logo" className="Logo" />
      <div className="HomeNav">
        <h1>Groupomania</h1>
        <a className="register" href="#">
          S'inscrire
        </a>
      </div>
      <div className="Loginform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>

          <input {...register("password")} placeholder="Mot de passe" />
          <p>{errors.password?.message}</p>

          <button type="submit">Entrer</button>
          {islogged && <Redirect to="/profile" />}
        </form>
      </div>
    </div>
  );
};

export default Login;
