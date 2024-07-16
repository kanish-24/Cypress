///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Scroll', () => {
    it('Google test', () => {

        cy.visit('https://www.google.com/');

        cy.get('[title="Search"]').type('Masai School{enter}');

        cy.scrollTo(0,+1000); // x is horizontal, y is vertical
        cy.wait(4000);
        cy.scrollTo(0,-1000); // +y => scroll down, -y => scroll up

        //cy.contains('Our Courses').scrollIntoView().wait(2000).click()

        cy.contains('Maasai people').scrollIntoView().wait(2000).click()
        


        
    });
});