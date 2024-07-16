///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Google assertion', () => {
    it('Assertion test1', () => {

        cy.visit('https://www.google.com/');

        cy.xpath('//textarea[@title="Search"]').type('Masai').should('be.visible');
        
    });
});