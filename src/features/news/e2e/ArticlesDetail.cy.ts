describe("Articles detail page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:19006/")
	})

	context(
		"user has the app opened and wants to see in detail an article",
		() => {
			it("should open the article detail page when clicked", () => {
				cy.get('[aria-label="ArticleRow-1"]').click()
			})
		}
	)
})

export {}
