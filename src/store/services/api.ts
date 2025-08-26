import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = createApi({
  reducerPath: "threadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const userId = localStorage.getItem("id");
      if (userId) headers.set("Authorization", `Bearer ${userId}`);
    },
  }),
  tagTypes: ["Post"],
  endpoints: () => ({}),
});

export default api;
