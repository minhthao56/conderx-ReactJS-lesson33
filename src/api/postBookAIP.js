import axiosClient from "./axiosClient";

const postBookAIP = {
  bookPost: (data) => {
    const url = "/books/api/post/books";
    return axiosClient.post(url, data);
  },
  getBooks: () => {
    const url = "/books/api/books";
    return axiosClient.get(url);
  },
};

export default postBookAIP;
