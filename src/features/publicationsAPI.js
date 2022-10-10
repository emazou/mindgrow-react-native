// import React from 'react'
// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import api_url from "../../api";


// export const publicationsAPI = createApi({
//     reducerPath: 'publicationsAPI',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${api_url}`
//     }),
//     tagTypes: ['Post'],
//     endpoints: (builder) => ({
//         getAllPublications: builder.query({
//             query: (obj) => `/publications?category=${obj.category}`
//         }),
//         getOnePublication: builder.query({
//             query: (id) => `/publications/${id}`
//         }),
//         getNewPublication: builder.mutation({
//             query(publication) {
//                 return {
//                     url: "/publications",
//                     method: "POST",
//                     body: publication,
//                     // headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//                 };
//             },
//         }),
//     })
// })
// export default publicationsAPI
// export const {useGetAllPublicationsQuery, useGetOnePublicationQuery, useGetNewPublicationMutation} = publicationsAPI
