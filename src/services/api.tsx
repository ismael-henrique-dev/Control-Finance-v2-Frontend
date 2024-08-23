import axios from "axios";

export const api = axios.create({
  baseURL: "https://control-finance-v2-api.onrender.com",
})
