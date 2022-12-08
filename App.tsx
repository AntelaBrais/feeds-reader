import * as Expo from "expo"
import { StatusBar } from "expo-status-bar"
import { PersistGate } from "redux-persist/integration/react"

import { NativeNavigation } from "./src/shared/infra/expo/navigation"
import { NativeBaseProvider } from "./src/shared/infra/providers/native-base"
import { NavigationProvider } from "./src/shared/infra/providers/navigation"
import { ReduxProvider } from "./src/shared/infra/providers/redux"
import { persistor } from "./src/shared/infra/redux/configureStore"

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
