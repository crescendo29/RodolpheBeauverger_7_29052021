import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import PostsService from "../services/posts-service";
import Card from "../styles/Post";
import { Link, Redirect } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

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

      <Card className="card">
        <ul className="posts">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/handlepost/?uuid=${post.uuid}`} className="post-card">
                <h4>
                  {post.user.firstName} {post.user.lastName}
                </h4>
                <ReactTimeAgo date={new Date(`${post.createdAt}`)} locale="fr-FR" verbose="date" />
                <p>{post.body}</p>
                <img src={post.content} alt="illustration du post" />
                <ul className="contents">
                  {post.comments.map((comment) => (
                    <li key={comment.id}>{comment.comm}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Profile;
