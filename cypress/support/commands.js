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

//For File Import
import 'cypress-file-upload';

//For File Download
require('cypress-downloadfile/lib/downloadFileCommand');

//For handling iFrames
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//For Cypress drag and drop plugin
require('@4tw/cypress-drag-drop')

//For Cypress drag and drop custom command
Cypress.Commands.add('draganddrop', (dragSelector, dropSelector) => {
    cy.get(dragSelector).should('exist')
        .get(dropSelector).should('exist');

    const draggable = Cypress.$(dragSelector)[0]; // Pick up this
    const droppable = Cypress.$(dropSelector)[0]; // Drop over this

    const coords = droppable.getBoundingClientRect()
    draggable.dispatchEvent(new MouseEvent('mousedown'));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', {
        clientX: coords.left + 10,
        clientY: coords.top + 10  // A few extra pixels to get the ordering right
    }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));
    return cy.get(dropSelector);
})

//Login Custom Command
Cypress.Commands.add('loginOrangeCRM', (username, password) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
    cy.get('#welcome').should('be.visible')
})