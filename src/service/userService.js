import http from "./http";
import decode from "jwt-decode";

const apiendpoint = "/users";

http.setToken(getToken());

const register = ({ name, email, password }) => {
  return http.post(apiendpoint, { name, email, password });
};

const login = async ({ email, password }) => {
  const { data, headers } = await http.post(apiendpoint + "/auth", {
    email,
    password,
  });

  console.log(headers);

  localStorage.setItem("x-auth-token", headers["x-auth-token"]);

  return data;
};

const logout = () => {
  localStorage.removeItem("x-auth-token");
};

const getUser = () => {
  try {
    const token = localStorage.getItem("x-auth-token");
    return decode(token);
  } catch (ex) {
    return null;
  }
};

function getToken() {
  return localStorage.getItem("x-auth-token");
}

export default {
  login,
  register,
  logout,
  getUser,
};
