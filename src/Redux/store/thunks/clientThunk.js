import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export const loginUser = async ({ email, password, remember }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`,
      {
        email,
        password,
        remember
      });
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};