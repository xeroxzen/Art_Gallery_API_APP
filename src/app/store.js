import { configureStore } from '@reduxjs/toolkit'
import { artInstituteApi } from "../services/artInstituteApi"

export const store = configureStore({
  reducer: {
    [artInstituteApi.reducerPath]: artInstituteApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artInstituteApi.middleware),
})
