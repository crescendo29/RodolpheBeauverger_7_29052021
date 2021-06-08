import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";
import { GroupoForm } from "../styles/Form";

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
    AuthService.login(data.email, data.password)
      .then(() => {
        setIslogged(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Email ou Password incorrects");
      });
  };

  return (
    <GroupoForm>
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="form-group">
            <input {...register("email")} id="email" placeholder="Email" className="form-control" />
            <p>{errors.email?.message}</p>
          </label>

          <label htmlFor="email" className="form-group">
            <input {...register("password")} id="password" placeholder="Mot de passe" className="form-control" />
            <p>{errors.password?.message}</p>
          </label>

          <button type="submit">Entrer</button>
          {islogged && <Redirect to="/dashboard" />}
        </form>
      </div>
    </GroupoForm>
  );
};

export default Login;
