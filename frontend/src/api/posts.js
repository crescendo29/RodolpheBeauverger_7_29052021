import axios from "axios"

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")

const urlPosts = "http://localhost:3000/api/posts"

export const getPosts = () => {
  axios.get(`${urlPosts}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const getPost = uuid => {
  axios.get(`${urlPosts}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const updatePost = uuid => {
  axios.put(`${urlPosts}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const deletePost = uuid => {
  axios.delete(`${urlPosts}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const createPost = () => {
  axios.post(`${urlPosts}`, {headers: {'Authorization': localStorage.getItem("token")}})
}