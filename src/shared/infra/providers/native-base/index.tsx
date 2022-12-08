import { NativeBaseProvider as Provider } from "native-base"

type NativeBaseProviderProps = {
	children: React.ReactNode
}

export function NativeBaseProvider({ children }: NativeBaseProviderProps) {
	return <Provider>{children}</Provider>
}
