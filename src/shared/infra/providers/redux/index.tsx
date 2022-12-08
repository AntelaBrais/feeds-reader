import { Provider } from "react-redux"

import { store } from "../../redux/configureStore"

type ReduxProviderProps = {
	children: React.ReactNode
}

export function ReduxProvider({ children }: ReduxProviderProps) {
	return <Provider store={store}>{children}</Provider>
}
