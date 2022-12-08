import * as WebBrowser from "expo-web-browser"
import { Image, Text, Column, Button } from "native-base"

import { apiSlice } from "./redux/apiSlice"

export const ArticleDetail = ({ route }) => {
	const { article } = apiSlice.useGetNewsQuery(undefined, {
		selectFromResult: ({ data }) => ({
			article: data?.find((article) => article.uri === route.params.articleUri),
		}),
	})

	const openArticleInBrowser = async () => {
		await WebBrowser.openBrowserAsync(article.short_url)
	}

	return (
		<Column>
			<Image
				resizeMode="cover"
				source={{ uri: article.multimedia[0].url }}
				alt={article.multimedia[0].caption}
				width="100%"
				height="3xs"
			/>
			<Text>{article.title}</Text>
			<Text>{article.abstract}</Text>
			<Button onPress={openArticleInBrowser}>Open in browser</Button>
		</Column>
	)
}
