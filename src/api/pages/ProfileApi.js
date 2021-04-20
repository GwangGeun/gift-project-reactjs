import { request } from "../index.js";

export const profileApi = async (email) => {
  return await request("get", `/api/v1/profile/${email}`, "");
};
