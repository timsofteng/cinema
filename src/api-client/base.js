import axios from "axios";

const request = (method, url, params, data) => {
  return axios({
    method: method,
    baseURL: "https://api.themoviedb.org",
    url: url,
    params: params,
    data: data
  });
};

const get = (url, params) => {
  return request("GET", url, params);
};

const post = (url, params, data) => {
  return request("POST", url, params, data);
};

const del = (url, params, data) => {
  return request("DELETE", url, params, data);
};

export { get, post, del };
