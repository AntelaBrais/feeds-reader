import AsyncStorage from "@react-native-async-storage/async-storage"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PURGE,
	REGISTER,
	PERSIST,
} from "redux-persist"

import { apiSlice } from "../../../features/news/redux/apiSlice"
import { articlesSliceReducer } from "../../../features/news/redux/articlesSlice"

const rootReducer = combineReducers({
	articles: articlesSliceReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
})

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	blacklist: ["articles"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(apiSlice.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
