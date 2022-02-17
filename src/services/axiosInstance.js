import axios from "axios";
import { API_KEY, API_URL } from "@env";

const axiosInstance = axios.create({
  baseURL: API_URL,
  params: { api_key: API_KEY, language: "en-US" },
  transformResponse: [
    (data) => {
      const json = JSON.parse(data);
      if (json.errors) throw json;
      if (json.success === false) throw { errors: json.status_message };
      return json;
    },
  ],
});

export { axiosInstance };
