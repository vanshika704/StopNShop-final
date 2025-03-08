import axios from 'axios';

// Set up base URL and axios instance
const BASE_URL = 'http://localhost:5050/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // If you need cookies or credentials for auth
});

// SIGNUP API FUNCTION
export const signupApi = async (data) => {
  const response = await axiosInstance.post('/auth/signup', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

// LOGIN API FUNCTION (FIXED)
export const loginApi = async (data) => {
  const response = await axiosInstance.post('/auth/login', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};


