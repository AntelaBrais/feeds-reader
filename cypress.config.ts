import { defineConfig } from "cypress"

export default defineConfig({
	e2e: {
		specPattern: "src/features/**/*.cy.ts",
		supportFile: false,
		setupNodeEvents(on, config) {},
	},
})
