import { request } from "../index.js";

export const loginApi = async (data) => {
  return await request("post", "/api/auth/signIn", data);
};
