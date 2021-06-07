import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import { Link, Redirect } from "react-router-dom";

const Profile = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    AuthService.getCurrentUser().then(
      (response) => {
        setContent(response);
      },
      (error) => {
        const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
      <h1>Bienvenue {content.firstName} !</h1>
    </div>
  );
};

export default Profile;
