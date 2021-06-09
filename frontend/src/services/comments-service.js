import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/comments/";

const createComment = (comm, userUuid, postUuid) => {
  return axios.post(
    API_URL,
    {
      comm,
      userUuid,
      postUuid,
    },
    { headers: authHeader() }
  );
};

export default {
  createComment,
};
