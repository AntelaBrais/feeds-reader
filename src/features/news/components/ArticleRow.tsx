import { Link } from "@react-navigation/native"
import { Row, Column, Image, Text } from "native-base"

import { useAppSelector } from "../../../shared/infra/redux/hooks"

export const ArticleRow = ({ article, index }) => {
	const searchText = useAppSelector((state) => state.articles.searchText)
	const articleTitleIncludesSearch: boolean = article.title
		.toLowerCase()
		.includes(searchText.toLowerCase())

	return (
		<>
			{article?.multimedia &&
			article?.multimedia[0].caption &&
			articleTitleIncludesSearch ? (
				<Link
					to={{ screen: "ArticleDetail", params: { articleUri: article.uri } }}
					accessibilityLabel={`ArticleRow-${index}`}>
					<Row
						width="full"
						padding="2"
						alignItems="center"
						space="md"
						borderBottomWidth="1"
						borderBottomColor="muted.500">
						<Image
							source={{
								uri: article?.multimedia ? article?.multimedia[0].url : "",
							}}
							alt={article?.multimedia ? article?.multimedia[0].caption : ""}
							size="md"
						/>
						<Column flexGrow={1} flexBasis={0}>
							<Text
								numberOfLines={2}
								isTruncated
								fontWeight="bold"
								fontSize="sm">
								{article.title}
							</Text>
							<Text numberOfLines={2} isTruncated fontSize="sm" maxWidth="full">
								{article.abstract}
							</Text>
						</Column>
					</Row>
				</Link>
			) : null}
		</>
	)
}
