it("Verify that user can visit Oliz store", () => {
    cy.visit("/shop/oliz-store");
    cy.url().should("eq", "https://www.daraz.com.np/shop/oliz-store");
});
it("Verify that user is able to visit homepage of Oliz", () => {
    cy.get("input[type=search]").click({ force: true });
    cy.get("#q").type("Oliz Store");
    cy.get(".search-box__button--1oH7").click();
    cy.get('[data-item-id="105114234"]').click();
    cy.get('.seller-name__detail > .pdp-link').contains("Oliz Store").click();
    cy.wait(10000);

});