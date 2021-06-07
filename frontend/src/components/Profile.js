import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Posts from "../services/posts";
import { Link, Redirect } from "react-router-dom";

const Profile = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    Posts.getPosts().then(
      (response) => {
        setPosts(response.data);
        console.log(response.data);
      },
      (error) => {
        const _posts = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setPosts(_posts);
      }
    );
  }, []);

  return (
    <div>
      <h1>Bienvenue {content.firstName} !</h1>
      <button>Modifier votre Profil </button>
      <button>Créer une Publication</button>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            {post.body}
            <ul className="contents">
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.comm}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
