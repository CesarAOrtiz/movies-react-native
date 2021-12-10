import React from "react";
import { RequestProvider } from "react-request-hook";
import axios from "axios";
import { API_KEY, API_URL } from "@env";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export default function RequestsHookProvider({ children }) {
  return <RequestProvider value={axiosInstance}>{children}</RequestProvider>;
}
