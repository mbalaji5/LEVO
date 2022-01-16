import axios from "axios";

const http = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net",
  timeout: 16000,
  headers: {
    "Content-type": "application/json"
  }
});
export default http;
