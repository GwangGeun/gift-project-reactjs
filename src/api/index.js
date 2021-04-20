import axios from "axios";

import { getToken, getTokenPayload, deleteToken } from "../utils/LocalStorage";

// store
import AccountStore from "../store/Account";

const accountStore = new AccountStore();
const apiEndpoint = "http://localhost:8080";

const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    function (config) {
      config.baseURL = apiEndpoint;
      config.timeout = 5000;

      // 유효한 토큰이 존재할 경우
      if (getTokenPayload() !== "error") {
        config.headers.Authorization = getToken();
      }
      // 유효한 토큰이 존재하지 않을 경우
      else {
        deleteToken();
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        accountStore.logout();
        return "401";
      }

      if (error.code === "ECONNABORTED") {
        return "100";
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // console.log("hello errors", error.response.data.error);
      // console.log("hello error", error.response.status);
      // return Promise.reject(error);
      return error;
    }
  );
  return instance;
};

/**
 * 이하 export function
 */
export const request = async (method, url, data) => {
  const instance = axios.create();
  setInterceptors(instance);
  return await instance({
    method,
    url,
    data,
  });
};
