import React, { useState } from "react";
import background from "../images/icon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";
import { GroupoForm } from "../styles/Form";

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
    <GroupoForm>
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="form-group">
            <input {...register("firstName")} id="firstName" placeholder="Votre Prénom." className="form-control" />

            <p>{errors.firstName?.message}</p>
          </label>
          <label htmlFor="lastName" className="form-group">
            <input {...register("lastName")} id="lastName" placeholder="Votre Nom." className="form-control" />
            <p>{errors.lastName?.message}</p>
          </label>

          <label htmlFor="email" className="form-group">
            <input {...register("email")} id="email" placeholder="Votre Email." className="form-control" />
            <p>{errors.email?.message}</p>
          </label>
          <label htmlFor="password" className="form-group">
            <input {...register("password")} id="password" placeholder="Votre Mot de passe." className="form-control" />
            <p>{errors.password?.message}</p>
          </label>

          <button type="submit">inscription</button>
          {islogged && <Redirect to="/" />}
        </form>
      </div>
    </GroupoForm>
  );
};

export default Register;
