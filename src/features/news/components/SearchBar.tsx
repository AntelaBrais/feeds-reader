import { Ionicons } from "@expo/vector-icons"
import { VStack, Input, Icon } from "native-base"

import { useSearchArticle } from "../hooks/useSearchArticle"

export const SearchBar = () => {
	const { searchText, handleSearchTextChange } = useSearchArticle()

	return (
		<VStack my="4" px="6" space="5" width="100%" accessibilityLabel="SearchBar">
			<VStack width="100%" space="5" alignSelf="center">
				<Input
					value={searchText}
					onChangeText={handleSearchTextChange}
					placeholder="Search by title"
					variant="filled"
					width="100%"
					height="10"
					borderRadius="10"
					py="1"
					px="2"
					InputLeftElement={
						<Icon
							ml="2"
							size="4"
							color="gray.400"
							as={<Ionicons name="ios-search" />}
						/>
					}
				/>
			</VStack>
		</VStack>
	)
}
