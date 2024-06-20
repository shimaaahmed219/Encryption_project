import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import {api} from "./api/clientSlice"
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
   [api.reducerPath]:api.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,api.middleware),
   
})