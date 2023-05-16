import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';


export const artInstituteApi = createApi({
  reducerPath: 'artInstituteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1' }),
  endpoints: (builder) => ({
    getArtworks: builder.query({
      query: () => '/artworks',
    }),
    getExhibitions: builder.query({
      query: () => '/exhibitions',
    }),
  }),
})


export const { useGetartInstituteApi } = artInstituteApi;
