///<reference types="cypress"/>

describe('Practice suite', () => {
    it('Test 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//a[contains(text(),'Free Access')]").click();

        // navigate back
        cy.go('back');

        // navigate forward
        cy.go('forward');

        // reload the page
        cy.reload();
        
    });
});