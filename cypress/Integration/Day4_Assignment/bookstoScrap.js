///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Books to scrap test', () => {
    it('Add to basket - test', () => {

        cy.visit('https://books.toscrape.com/');

        cy.xpath("(//button[contains(text(),'Add to basket')])[1]").click().should('have.text','Adding...');
        //
    });

    it('Test Case-1 Verify Page Title', () => {

        cy.visit('https://books.toscrape.com/');

        cy.title().should('include','All products');
        
    });
    it('Test Case-2 Non-fiction link click functionality', () => {

        cy.visit('https://books.toscrape.com/');

        cy.contains('Nonfiction').click();
        
    });
    it.only('Test Case-3 Add to Basket', () => {

        cy.visit('https://books.toscrape.com/');

        //cy.contains('Add to basket').click();

        cy.xpath("(//button[contains(text(),'Add to basket')])[2]").click().should('have.text','Adding...');


        
    });
    
});