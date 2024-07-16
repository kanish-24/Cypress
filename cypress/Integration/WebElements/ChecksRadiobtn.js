///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Radio and checkbox tests', () => {
    it('Tests 1 - Radio button', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // checking radio button 1
        cy.get('input[value="radio1"]').check().should('be.visible').and('be.checked').and('have.attr','class');
       // checking radio button 2
       cy.get('input[value="radio2"]').check().should('be.visible').and('be.checked').and('have.attr','type'); 
          // checking radio button 2
        cy.get('input[value="radio3"]').check().should('be.visible').and('be.checked').and('have.attr','name'); 
    });
    it('Checkboxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // checking on all the checkboxes at once
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked');
        // unchecking on all the checkboxes at once
        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked')


        
    });
});