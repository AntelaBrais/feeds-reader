import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ArticlesState = {
	searchText: string
}

const initialState: ArticlesState = {
	searchText: "",
}

const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {
		change: (state, action: PayloadAction<string>) => {
			state.searchText = action.payload
		},
	},
})

export const { change } = articlesSlice.actions
export const articlesSliceReducer = articlesSlice.reducer
