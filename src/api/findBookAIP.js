import axiosClient from "./axiosClient";

const findBookAIP = {
  findBook: (params) => {
    const url = "books/api/find";
    return axiosClient.get(url, { params });
  },
};

export default findBookAIP;
