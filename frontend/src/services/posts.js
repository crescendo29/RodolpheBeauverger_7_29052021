import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/posts/";

const getPosts = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const createPost = (body, content, userUuid) => {
  return axios.post(API_URL, { headers: authHeader() });
};

export default {
  getPosts,
};
