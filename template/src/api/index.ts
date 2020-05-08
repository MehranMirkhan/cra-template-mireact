import Axios, { AxiosResponse } from "axios";

import config from "src/app.config.json";

import auth from "./auth.api";
import users from "./users.api";

export const axios = Axios.create({
  baseURL: config.apiURL,
  timeout: config.requestTimeout,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

// Logging
if (config.mode === "dev" && !!axios) {
  axios.interceptors.request.use((request) => {
    console.log("Request:", request);
    return request;
  });
  axios.interceptors.response.use((response) => {
    console.log("Response:", response);
    return response;
  });
}

export default {
  auth,
  users,
};

export function isSuccess(resp: AxiosResponse): boolean {
  return !!resp && resp.status >= 200 && resp.status < 300;
}
