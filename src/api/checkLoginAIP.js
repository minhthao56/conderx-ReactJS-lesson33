import axiosClient from "./axiosClient";

const checkLoginAIP = {
  checkLogin: () => {
    const url = "/users/checklogin";
    return axiosClient.get(url);
  },
};

export default checkLoginAIP;
