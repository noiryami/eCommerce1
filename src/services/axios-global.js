import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";
axios.defaults.baseURL = API_URL;