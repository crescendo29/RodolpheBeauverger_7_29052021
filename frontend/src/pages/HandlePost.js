import React from "react";
import { useEffect } from "reat";
import PostsService from "../services/posts-service";

const [content, setContent] = useState("");

useEffect(() => {
  PostsService.getPost(uuid).then(
    (response) => {
      setContent(response.data);
      console.log(response.data);
    },
    (error) => {
      const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      setPosts(_content);
    }
  );
}, []);

function HandlePost() {
  return (
    <div>
      {/* <div className="post-card">
        <h4>agissez sur le post</h4>
        <span>{content.createdAt}</span>
        <p>{post.body}</p>
        <img src={post.content} alt="illustration du post" />
        <ul className="contents">
          {post.comments.map((comment) => (
            <li key={comment.id}>{comment.comm}</li>
          ))}
        </ul>
      </div> */}
      hello
    </div>
  );
}

export default HandlePost;
