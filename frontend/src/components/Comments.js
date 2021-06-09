import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { GroupoForm } from "../styles/Form";
import CommentsService from "../services/comments-service";

const Comments = () => {
  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    CommentsService.createComment(data.comm, user.userUuid)
      .then(() => setIsCreated(true))
      .catch((errors) => {
        console.log(errors);
        alert("Quelque choose s'est mal passé.");
      });
  };

  return (
    <GroupoForm>
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="comm" className="form-group">
            <input {...register("comm")} id="comm" placeholder="Votre contenu" className="form-control" />
          </label>
          <button type="submit">Publier</button>
          {isCreated && <Redirect to="/dashboard" />}
        </form>
      </div>
    </GroupoForm>
  );
};

export default Comments;
