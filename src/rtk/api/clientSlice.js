import { url } from "../../components/URL";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({ baseUrl: {url} }), 
  endpoints: (builder) => ({
    submitClient: builder.mutation({
      query: (data) => ({
        url: '/client',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }),
    }),
  }),
});

export const { useSubmitClientMutation } = api;
export default api;