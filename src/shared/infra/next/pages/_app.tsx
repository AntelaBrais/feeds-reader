import { NativeBaseProvider } from "native-base"

import { ReduxProvider } from "../../providers/redux"

export default function MyApp({ Component, pageProps }) {
	return (
		<NativeBaseProvider>
			<ReduxProvider>
				<Component {...pageProps} />
			</ReduxProvider>
		</NativeBaseProvider>
	)
}
