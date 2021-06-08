import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, Redirect } from "react-router-dom";
import { GroupoForm } from "../styles/Form";
import UserService from "../services/user.service";

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

const ManageProfile = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    UserService.updateUser(data.firstName, data.lastName, data.email, data.password)
      .then(() => setIsUpdated(true))
      .catch((error) => {
        console.log(error);
        alert("Quelque choose s'est mal passé.");
      });
  };

  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <GroupoForm>
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="form-group">
            <input {...register("firstName")} id="firstName" className="form-control" />
            {user.firstName}
            <p>{errors.firstName?.message}</p>
          </label>
          <label htmlFor="lastName" className="form-group">
            <input {...register("lastName")} id="lastName" placeholder="Votre Nom." className="form-control" />
            {user.lastName}
            <p>{errors.lastName?.message}</p>
          </label>

          <label htmlFor="email" className="form-group">
            <input {...register("email")} id="email" placeholder="Votre Email." className="form-control" />
            {user.email}
            <p>{errors.email?.message}</p>
          </label>
          <label htmlFor="password" className="form-group">
            <input {...register("password")} id="password" placeholder="Votre Mot de passe." className="form-control" />
            {user.password}
            <p>{errors.password?.message}</p>
          </label>

          <button type="submit">Mettre à jour</button>
          {isUpdated && <Redirect to="/dashboard" />}
        </form>
      </div>
    </GroupoForm>
  );
};

export default ManageProfile;
