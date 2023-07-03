import axios from "axios";

const API_KEY = "034daa7694c0247bdfccf293ab74a7ba";

const BASE_URL = "https://api.themoviedb.org";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getData = (url) => {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    console.log(error);
  }
};

export default API_KEY;
