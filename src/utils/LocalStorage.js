import jwt_decode from "jwt-decode";

/**
 * token 관련 field
 */
export const saveToken = (value) => {
  localStorage.setItem("jwt_token", value);
};

export const getToken = () => {
  return localStorage.getItem("jwt_token");
};

export const getTokenPayload = () => {
  try {
    const payload = jwt_decode(localStorage.getItem("jwt_token"));
    return payload;
  } catch (err) {
    return "error";
  }
};

export const deleteToken = () => {
  localStorage.removeItem("jwt_token");
};
