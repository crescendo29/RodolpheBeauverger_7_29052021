import axios from "axios"

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")

const urlUser = "http://localhost:3000/api/user"

export const Signup = signup => {
  axios.post(`${urlUser}/signup`, signup, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const Login = login => {
  axios.post(`${urlUser}/login`, login, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const Users = () => {
  axios.post(`${urlUser}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const Profile = uuid => {
  axios.get(`${urlUser}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const DeleteUser = uuid => {
  axios.delete(`${urlUser}${uuid}/`, {headers: {'Authorization': localStorage.getItem("token")}})
}

