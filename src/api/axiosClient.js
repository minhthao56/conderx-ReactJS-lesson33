import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://v2hg4.sse.codesandbox.io/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);
export default axiosClient;
