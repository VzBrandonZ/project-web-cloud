import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:2500/v1/sexto/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
