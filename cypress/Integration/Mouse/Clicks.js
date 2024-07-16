///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Mouse actions test', () => {
    it.skip('Right click me test', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath("//*[text()='right click me']").rightclick();

        cy.xpath("//span[contains(text(),'Edit')]").click();

        cy.xpath("//button[contains(text(),'Double-Click')]").dblclick({force:true});
        
    });
    it('Mouse hover test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Mouse hover an element
        // this will invoke the element to show what element is containing
        cy.get('#mousehover').invoke('show',{force:true}); 

        // click on Top option
        // we can tell cypress to click on it forceably
        cy.contains('Top').click({force:true});

        cy.url().should('include','top'); // Asserting url after clicking on top
        
    });
    it.only('Mouse hover - approach-2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Mouse hover an element
        // trigger is a method to work with mouse actions
        cy.get('#mousehover').trigger('mouseover')
        // click on Top option
        // we can tell cypress to click on it forceably(force:true is used when webelements are not visible)
        cy.contains('Top').click({force:true});

        cy.url().should('include','top'); // Asserting url after clicking on top

        
    });
});