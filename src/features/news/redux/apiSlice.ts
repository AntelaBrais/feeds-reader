import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Article } from "../../../domain/articleEntity"

const sortNewsByDate = (a, b) => {
	const firstNewsDate = new Date(a.updated_date).getTime()
	const secondNewsDate = new Date(b.updated_date).getTime()
	return firstNewsDate - secondNewsDate
}

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.nytimes.com/svc/topstories/v2/",
	}),
	endpoints: (builder) => ({
		getNews: builder.query<Article[], void>({
			query: () => ({
				url: "arts.json",
				params: {
					"api-key": "",
				},
			}),
			transformResponse: (response: { results: any[] }) => {
				return response.results.sort(sortNewsByDate)
			},
		}),
	}),
})

export const { useGetNewsQuery } = apiSlice
