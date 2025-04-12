import axiosInstance from "./axiosInstance";

// Signup API
export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login API
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
