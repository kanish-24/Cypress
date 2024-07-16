///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Practice tests', () => {
    it('test1 - URL assertion', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Asserting URL with the given endpoint
        cy.url().should('include','AutomationPractice/');

        // Asserting the title of webpage
        cy.title().should('include','Practice Page');

        // Assert the visibility of the below text

        cy.get('input[name="show-hide"]').should('be.visible');

        // Assert to check whether an element is invisible
        cy.get("#hide-textbox").click() // After clicking on hide button the element will disappear

        cy.get('input[name="show-hide"]').should('not.be.visible');

        cy.get(".ui-autocomplete-input").type("Wednesday").should('have.value','Wednesday');

        //Asserting whether checkbox has been checked
        cy.xpath('//input[@value="option1"]').check().should('have.value','option1')

        cy.xpath('//input[@value="option2"]').check().should('be.checked');

        cy.xpath('//input[@value="option3"]').check().should('be.checked');

        //uncheck will uncheck the checkbox
        cy.xpath('//input[@value="option1"]').uncheck().should('have.value','option1')

        
    });
});