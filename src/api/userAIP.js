import axiosClient from "./axiosClient";

const signUpApi = {
  signUp: (user) => {
    const url = "/users/create";
    return axiosClient.post(url, user);
  },
  logIn: (user) => {
    const url = "/users/login";
    return axiosClient.post(url, user);
  },
};

export default signUpApi;
