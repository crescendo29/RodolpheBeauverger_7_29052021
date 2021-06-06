import React, { useState } from "react";
import background from "../images/icon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required("Veuillez indiquer votre Prénom."),
  lastName: yup.string().required("Veuillez indiquer votre Nom."),
  email: yup.string().email().required("Veuillez indiquer votre Email."),
  password: yup
    .string()
    .required("Veuillez indiquer votre mot de passe.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "doit contenir au moins 8 Caractèress, 1 Majuscule, 1 Minuscule, 1 Nombre et 1 caractère spécial"
    ),
});

const Register = () => {
  const [islogged, setIslogged] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    AuthService.register(data.firstName, data.lastName, data.email, data.password)
      .then(() => setIslogged(true))
      .catch((error) => {
        console.log(error);
        alert("Quelque choose s'est mal passé.");
      });
  };

  return (
    <div className="HomePage">
      <img src={background} alt="Logo" className="Logo" />
      <div className="HomeNav">
        <h1>Groupomania</h1>
        <Link className="register" to="/">
          Se connecter
        </Link>
      </div>
      <div className="Loginform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="Votre Prénom." />
          <p>{errors.firstName?.message}</p>

          <input {...register("lastName")} placeholder="Votre Nom." />
          <p>{errors.lastName?.message}</p>

          <input {...register("email")} placeholder="Votre Email." />
          <p>{errors.email?.message}</p>

          <input {...register("password")} placeholder="Votre Mot de passe." />
          <p>{errors.password?.message}</p>

          <button type="submit">S'inscrire</button>
          {islogged && <Redirect to="/" />}
        </form>
      </div>
    </div>
  );
};

export default Register;
