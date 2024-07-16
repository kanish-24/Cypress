///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Dropdown tests', () => {
    it('Test 1 - Selected by value attribute', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // select option 3 from dropdown using value
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
        // select option 2 from dropdown using value
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        // select option 1 from dropdown using value
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');

        
    });

    it('Select by text', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Not working with should(have.text)

        //select option 3 from dropdown using text
        //cy.get('#dropdown-class-example').select('Option1').should('have.text','Option1');
        // select option 2 from dropdown using text
        //cy.get('#dropdown-class-example').select('Option2').should('have.text','option2');
        // select option 1 from dropdown using text
        //cy.get('#dropdown-class-example').select('Option1').should('have.text','option1');

        
    });
    it('Select by index', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        
        //cy.get('#dropdown-class-example').select([0,1]).invoke('val').should('deep.equal',['option1','option2']);
        cy.get('#dropdown-class-example').select(2).should('have.value','option2');
        
    });
});