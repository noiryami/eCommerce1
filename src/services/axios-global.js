import axios from "axios";

// For local development: http://localhost:5005
// For Vercel production: <your-vercel-url>/api
const API_URL = import.meta.env.VITE_API_URL || 
  (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
    ? 'http://localhost:5005' 
    : `${window.location.origin}/api`);

axios.defaults.baseURL = API_URL;