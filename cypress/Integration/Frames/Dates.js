///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Date picker tests', () => {
    it('test-1 Select a date', () => {

        cy.visit('https://jqueryui.com/datepicker/')

        // load the frame
        cy.frameLoaded('.demo-frame')

        // type the date using xpath
        cy.iframe().xpath('//input[@type="text"]').type('07/10/2024{enter}');
        
    });
});