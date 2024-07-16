///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Frames test', () => {
    it('Test-1 iframes', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        // Locator for iframe using frameloaded() method
        cy.frameLoaded('#courses-iframe');
        // to interact with elements inside the frame use iframe()
        cy.iframe().contains('Blog').click();
    });
});