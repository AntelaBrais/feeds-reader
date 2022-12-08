import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "../../../features/news/redux/apiNewsSlice"
import { articlesSliceReducer } from "../../../features/news/redux/articlesSlice"

const rootReducer = {
	articles: articlesSliceReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
