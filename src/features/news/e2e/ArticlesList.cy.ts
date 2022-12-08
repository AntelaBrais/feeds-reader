describe("Articles list page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:19006/Home")
	})

	context("user opens the app", () => {
		it("articles list should be visible", () => {
			cy.get('[aria-label="ArticleList"]').should("exist")
		})

		it("search bar should exist", () => {
			cy.get('[aria-label="SearchBar"]').should("exist")
		})
	})
})

export {}
