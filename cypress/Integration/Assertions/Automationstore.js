///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Automation store test suite', () => {
    it('Test 1 contact us', () => {

        cy.visit('https://automationteststore.com/')

        // click on contact us
        cy.xpath("//a[contains(text(),'Contact Us')]").click();
        //enter the first name
        cy.xpath('//input[@name="first_name"]').type('Kanishk');
        //enter the email
        cy.get('#ContactUsFrm_email').type('kanishchaddha199@gmail.com');
        // enter the enquiry
        cy.get('textarea[name="enquiry"]').type('Availability of Mens sports shoes');
        // click on submit button
        cy.xpath('(//button[@type="submit"])[1]').click();
        // Assert the msg after clicking on submit button
        cy.xpath("//p[contains(text(),'Your enquiry')]").should('have.text','Your enquiry has been successfully sent to the store owner!')
        // click on continue button
        cy.get('a[title="Continue"]').click();
    });
});