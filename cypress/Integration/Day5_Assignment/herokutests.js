///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Heroku dynamic loading', () => {
    it('Test-1 Verifying Hello world is displayed or not', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
        
        cy.contains('Start').click();

        cy.contains('Hello').should('have.text','Hello World!');

    });
});