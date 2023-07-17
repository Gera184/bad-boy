import axios from "axios";

axios.defaults.baseURL = "https://test.eranit.co.il";

export const axiosRequest = async (params) => {
  try {
    const result = await axios.request(params);
    return result.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught by the calling function
  }
};
