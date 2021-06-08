import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import PostsService from "../services/posts-service";
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
    PostsService.getPosts().then(
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
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              {post.user.firstName} {post.user.lastName} {post.createdAt}
            </h2>
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
