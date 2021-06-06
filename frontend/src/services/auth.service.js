import axios from "axios";

const API_URL = "http://localhost:3000/api/user/";

const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "signup", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return axios.get(API_URL + `${user.userUuid}`).then((response) => {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
  });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
