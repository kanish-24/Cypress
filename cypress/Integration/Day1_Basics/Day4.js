///<reference types="cypress"/>
describe('Rohit Shetty test suite', () => {
    it('contains func', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath("//a[contains(text(),'Free Access')]").click();

        cy.xpath("//button[contains(text(),'Login')]").click();

        cy.xpath('//input[@id="checkBoxOption1" and @value="option1" and @name="checkBoxOption1" and @type="checkbox"]').check();
        
    });
    it('Meesho test suite', () => {
        cy.visit("(//span[contains(text(),'Women Ethnic')])[1]");

        cy.xpath("(//span[contains(text(),'Women Ethnic')])[1]").click();

        cy.xpath("//span[text()='Men']").click();
        
    });
});