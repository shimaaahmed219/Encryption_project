import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../components/URL"; 

export const api = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getClient: builder.query({
      query: () => "/client?type=passport authority",
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/client/${id}`,
        method: "DELETE",
      }),
     
    }),
  }),
});

export const { useGetClientQuery, useDeleteClientMutation } = api;
