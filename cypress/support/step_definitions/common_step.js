import { Before, When, Then , Given } from "@badeball/cypress-cucumber-preprocessor";

Given('que el usuario ingresa a la página de Fravega', () => {
    cy.visit('/');    
    cy.get('[data-test-id="header-geo-location-form-postal-number"]')
    .click().wait(1000)
    .type("5000", { delay: 200 });
    cy.get('[data-test-id="button-save-postal-code"]').click(); 
    })