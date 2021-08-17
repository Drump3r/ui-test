import axios from "axios";
import publicEnv from "../publicEnv";

// const apiUrl = process.env.API_URL || "http://localhost:3000/";
const fetchApi = axios.create({
  baseURL: `${publicEnv.apiUrl}api/`,
});

export default fetchApi;
