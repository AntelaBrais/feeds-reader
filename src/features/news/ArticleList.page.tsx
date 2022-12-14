import { FlashList } from "@shopify/flash-list"
import { Flex, Center } from "native-base"

import { Article } from "../../domain/articleEntity"
import { ArticleRow } from "./components/ArticleRow"
import { SearchBar } from "./components/SearchBar"
import { useGetNewsQuery } from "./redux/apiSlice"

export const ArticleList = () => {
	const { data = [] } = useGetNewsQuery()

	const renderItem = ({ item, index }: { item: Article; index: number }) => {
		return <ArticleRow article={item} index={index} />
	}

	return (
		<Flex width="full" height="full">
			<Center>
				<SearchBar />
			</Center>
			<FlashList
				data={data}
				renderItem={renderItem}
				estimatedItemSize={150}
				accessibilityLabel="ArticleList"
			/>
		</Flex>
	)
}
