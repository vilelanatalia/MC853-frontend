import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export { api, queryClient };
