import axios from "axios";

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const fetchCurrentColor = async () => {
  const ENPOINT_URL = `${ENDPOINT}/transitions`;
  console.log("endpoint:", ENPOINT_URL)
  try {
    const response = await axios.get(ENPOINT_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetColor = async () => {
  const ENPOINT_URL = `${ENDPOINT}/transitions`;
  try {
    const response = await axios.post(ENPOINT_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const goNext = async ({ color }) => {
  const ENPOINT_URL = `${ENDPOINT}/transitions/${color}`;
  try {
    const response = await axios.put(ENPOINT_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
