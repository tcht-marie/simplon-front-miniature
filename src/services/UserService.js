import client, { _post } from "../config/AxiosConfig";

client.interceptors.response.use(
  (response) => {
    sessionStorage.setItem("accessToken", response.data.accessToken);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const UserService = () => {
  const register = (username, password) => {
    return _post("/api/auth/register", {
      username,
      password,
    });
  };

  const login = (username, password) => {
    return _post("/api/auth/login", { username, password });
  };

  return { register, login };
};

export default UserService;
