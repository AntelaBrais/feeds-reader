import * as Expo from "expo"
import { StatusBar } from "expo-status-bar"

import { NativeBaseProvider } from "../providers/native-base"
import { NavigationProvider } from "../providers/navigation"
import { ReduxProvider } from "../providers/redux"
import { NativeNavigation } from "./navigation"

const App = () => {
	return (
		<NavigationProvider>
			<StatusBar style="auto" />
			<NativeBaseProvider>
				<ReduxProvider>
					<NativeNavigation />
				</ReduxProvider>
			</NativeBaseProvider>
		</NavigationProvider>
	)
}

export default Expo.registerRootComponent(App)
