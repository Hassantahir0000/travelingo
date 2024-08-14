import axios, { AxiosInstance } from "axios";
import { BASE_URL, ACCESS_TOKEN } from "./constants";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// TOKEN INTERCEPTOR
axiosClient.interceptors.request.use(
  (config) => {
    if (ACCESS_TOKEN) {
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
