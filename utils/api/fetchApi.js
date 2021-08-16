import axios from "axios";
// import { apiUrl } from "../../server/configEnv";

const apiUrl = process.env.API_URL || "http://localhost:3000/";
const fetchApi = axios.create({
  baseURL: `${apiUrl}api/`,
});

export default fetchApi;
