import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
const token = process.env.REACT_APP_JWT_TOKEN

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token:`Bearer ${token}`}
})