import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { GroupoForm } from "../styles/Form";
import PostsService from "../services/posts-service";

const Post = () => {
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
    PostsService.createPost(data.body, data.content)
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
          <label htmlFor="body" className="form-group">
            <input {...register("body")} id="body" placeholder="Votre contenu" className="form-control" />
          </label>
          <label htmlFor="content" className="form-group">
            <input {...register("content")} type="file" id="content" className="form-control" />
          </label>
          <button type="submit">Publier</button>
          {isCreated && <Redirect to="/dashboard" />}
        </form>
      </div>
    </GroupoForm>
  );
};

export default Post;
