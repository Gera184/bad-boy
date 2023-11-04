import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

export function makeRequest(url, options) {
  return api(url, options)
    .then((res) => res.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? "Something Went wrong")
    );
}

export function makeThunkRequest(url, options) {
  return async function (payload, thunkAPI) {
    try {
      const resp = await api(url, { ...options, ...payload });
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message ?? "Something Went wrong"
      );
    }
  };
}
