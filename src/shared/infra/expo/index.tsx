import * as Expo from "expo"
import { StatusBar } from "expo-status-bar"
import { PersistGate } from "redux-persist/integration/react"

import { NativeBaseProvider } from "../providers/native-base"
import { NavigationProvider } from "../providers/navigation"
import { ReduxProvider } from "../providers/redux"
import { persistor } from "../redux/configureStore"
import { NativeNavigation } from "./navigation"

const App = () => {
	return (
		<NavigationProvider>
			<StatusBar style="auto" />
			<NativeBaseProvider>
				<ReduxProvider>
					<PersistGate loading={null} persistor={persistor}>
						<NativeNavigation />
					</PersistGate>
				</ReduxProvider>
			</NativeBaseProvider>
		</NavigationProvider>
	)
}

export default Expo.registerRootComponent(App)
