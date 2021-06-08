import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/user/";

const updateUser = (firstName, lastName, email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.put(
    API_URL + `${user.userUuid}`,
    {
      firstName,
      lastName,
      email,
      password,
    },
    { headers: authHeader() }
  );
};

export default { updateUser };
