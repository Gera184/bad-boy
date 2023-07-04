import { useState } from "react";
import axios from "axios";

//the default base URL for all Axios requests made in the code
//if removed you will require  to provide the full URL for each request

axios.defaults.baseURL = "https://test.eranit.co.il/ErnTransApiChannel/pos";

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const operation = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation };
};
