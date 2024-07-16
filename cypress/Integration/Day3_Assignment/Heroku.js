///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Heroku assertions test', () => {
    it('Assertion test -1', () => {

        cy.visit('https://the-internet.herokuapp.com/');

        cy.title().should('include','The Internet')
        
    });
    it.only('Heroku dynamic', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        // Handling invisible elements
        // assert hidden element 
        cy.get('#finish').should('not.be.visible');
        // click pn start button
        cy.contains('Start').click();
        
    });
});