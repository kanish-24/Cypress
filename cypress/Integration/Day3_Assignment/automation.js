///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Automation practice', () => {
    it('test-1', () => {

        cy.visit('http://automationpractice.com/index.php')

        cy.get('h2');

        //cy.get(':nth-child(4) > :nth-child(1)').find();

        
    });
});