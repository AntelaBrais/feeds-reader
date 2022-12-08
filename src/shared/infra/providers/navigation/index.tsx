import { NavigationContainer } from "@react-navigation/native"
import * as Linking from "expo-linking"
import { useMemo } from "react"

type NavigationProviderProps = {
	children: React.ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
	return (
		<NavigationContainer
			linking={useMemo(
				() => ({
					prefixes: [Linking.createURL("/")],
					config: {
						initialRouteName: "home",
						screens: {
							home: "",
						},
					},
				}),
				[]
			)}>
			{children}
		</NavigationContainer>
	)
}
