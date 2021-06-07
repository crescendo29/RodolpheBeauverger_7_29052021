import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Posts from "../services/posts";
import Comments from "../services/comments";
import { Link, Redirect } from "react-router-dom";

const Profile = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

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
  useEffect(() => {
    Comments.getComments().then(
      (response) => {
        setComments(response.data);
        console.log(response.data);
      },
      (error) => {
        const _comments = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setComments(_comments);
      }
    );
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Bienvenue {content.firstName} !</h1>
      <button>Modifier votre Profil </button>
      <button>Créer une Publication</button>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            {post.body}
            {/* <ul className="contents">{comments.filter((postId) => postId === post.id(<li key={comments.id}>{comments.body}</li>))}</ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
