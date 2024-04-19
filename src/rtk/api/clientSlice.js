
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from '../../components/URL';

export const passFormApi = createApi({
  reducerPath: 'passFormApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }), // تحديد عنوان قاعدة الويب API الخاص بك
  endpoints: (builder) => ({
    submitForm: builder.mutation({
      query: (formData) => ({
        url: `/client`,
        method: 'POST',
        body: formData,
       
      }),
    }),
  }),
});

export const { useSubmitFormMutation } = passFormApi