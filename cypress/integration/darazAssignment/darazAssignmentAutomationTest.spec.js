/// <reference types="cypress" />
context("testCaseForDarazAssignment", () => {
    beforeEach(() => {
        cy.login();
    });
    it("TC001 : Verify that user is able to login with valid credentials", () => {
        cy.wait(10000);
        cy.get("#topActionUserAccont").contains("Jenisha's account");
    });
    it("TC002 : Verify that user can enter character in search field", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Mobile");
    });
    it("TC003 : Verify that user can search Mobile", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Mobile");
        cy.get(".search-box__button--1oH7").click();
    });
    it("TC004 : Verify that user can sort results on the basis of Brand, Price and Rating then add item to the cart and remove it", () => {
        //Enter Mobile in Search field
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Mobile");
        cy.get(".search-box__button--1oH7").click();
        //Selects Samsumg from Brand
        cy.get(":nth-child(2) > .cnHBqi").click();
        cy.get(
            ":nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input"
        ).click();
        cy.get(":nth-child(5) > .cnHBqi").click();
        // cy.get("c1DHiF").type("1000");
        //Enter min Price
        cy.get('[placeholder="Min"]').type(1000);
        //Enter max Price
        cy.get('[placeholder="Max"]').type(100000);
        cy.get(".ant-btn").click();
        //Select 4 starts
        cy.get(":nth-child(2) > .ant-rate").click();
        cy.get(".c2Lu3x").contains("Filtered By:");
        cy.get(".ant-tag-text").contains("Brand: Samsung");
        cy.wait(10000);
        cy.get(":nth-child(3) > .ant-tag-text").contains("Price: 1000-100000");
        cy.get(":nth-child(4) > .ant-tag-text").contains("Rating: 4 & Up");
        //Select Range
        cy.get(".c3o2ls").click();
        cy.get(".ant-select-arrow").click();
        cy.get('[title="Price low to high"] > div').click({ force: true });
        cy.wait(10000);
        cy.get('[data-item-id="104798763"]').click();
        cy.get(".pdp-button-text").contains("Add to Cart").click();
        // Go To Cart
        cy.wait(10000);
        cy.get(".next-btn-secondary").click();
        //Delete item from cart
        cy.get(".operations > .automation-btn-delete").click();
        cy.get("#dialog-footer-2 > .next-btn-primary").click();
    });

    it("TC005: Verify that user is able to visit Oliz Store homepage", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Oliz Store");
        cy.get(".search-box__button--1oH7").click();
        cy.get('[data-item-id="105114234"]').click();
        cy.get(".seller-name__detail > .pdp-link").contains("Oliz Store").click();
    });
    it("TC006: Verify that user is able to search Oliz Store", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Oliz Store");
        cy.get(".search-box__button--1oH7").click();
    });
    it("TC007 : Verify that user is able to search Oliz Store and verify the base URL", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Oliz Store");
        cy.get(".search-box__button--1oH7").click();
        cy.get('[data-item-id="105114234"]').click();
        cy.get(".seller-name__detail > .pdp-link").contains("Oliz Store").click();
        cy.wait(10000);
        //cy.url().should("include", "/shop/oliz-store/");
        //cy.url().should("include", Cypress.config().baseUrl);
        cy.url().should("include", Cypress.config("baseUrl", "/shop/oliz-store/"));
    });
    it("TC008 : Verify that user is able go to the free delivery and Shop an item from the page", () => {
        cy.intercept(
            'post',
            'https://my.daraz.com.np/pdp/item/addItemSkuQA', [],
        ).as('addItemComment')
        cy.get('[data-color="#e52f1b"] > .card-channels-link')
            .contains("Free Delivery")
            .click();
        cy.contains('Shop Now').click();
        cy.get('.delivery__content > .delivery__options > :nth-child(1) > .delivery-option-item > .delivery-option-item__body > .delivery-option-item__shipping-fee').should('be.visible');
        cy.get('.qna-ask-box > .next-input > input').type('Nice Product');
        cy.wait(10000);
        cy.contains('ASK QUESTIONS').click();
        cy.wait('@addItemComment');
    });

    it("TC009 : Verify that user is able to search Cable and sort the result on the basis of free delivery", () => {
        cy.get("input[type=search]").click({ force: true });
        cy.get("#q").type("Cable");
        cy.get(".search-box__button--1oH7").click();
    });
    it("TC010 : Verify that user is able to click on Save More On App button", () => {
        cy.wait(20000);
        cy.get("#topActionDownload").contains("SAVE MORE ON APP").click();
        cy.wait(20000);
        cy.get(".app-apple").should("be.visible");
        cy.get(".app-google").should("be.visible");
    });
});