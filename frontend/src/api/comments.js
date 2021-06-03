import axios from "axios"

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")

const urlComments = "http://localhost:3000/api/comments"

export const getComments = () => {
  axios.get(`${urlComments}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const getComment = uuid => {
  axios.get(`${urlComments}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const createComment = () => {
  axios.get(`${urlComments}`, {headers: {'Authorization': localStorage.getItem("token")}})
}
export const deleteComment= uuid => {
  axios.delete(`${urlComments}/${uuid}`, {headers: {'Authorization': localStorage.getItem("token")}})
}