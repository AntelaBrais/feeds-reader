import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ArticleDetail } from "../../../../features/news/ArticleDetail.page"
import { ArticleList } from "../../../../features/news/ArticleList.page"

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={ArticleList} />
			<Stack.Screen
				name="ArticleDetail"
				component={ArticleDetail}
				options={{ title: "Article Detail" }}
			/>
		</Stack.Navigator>
	)
}
