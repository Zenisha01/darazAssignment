// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("login", () => {
    cy.viewport(1920, 1200);
    cy.visit("https://www.daraz.com.np/");
    cy.get("#anonLogin").click();
    cy.get(".mod-login-input-loginName > input").type(Cypress.env("userName"));
    cy.get(".mod-input-password > input").type(Cypress.env("password"));
    cy.get(".mod-login-btn").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })