///<reference types="Cypress"/>
describe('test suite', () => {
    it('products', () => {

        cy.visit('https://automationteststore.com/')
        cy.xpath("//input[@type='text' and @placeholder='Search Keywords']").click()
        cy.xpath("//form[@id='subscribeFrm']").click()
        cy.xpath("//*[text()='Skincare']")
        cy.xpath("//*[text()='Fragrance']")
        cy.xpath("(//a[contains(text(),'accessories')])[2]").click()
        //cy.xpath("//a[contains(text(),'Contact Us')]").click()
        //cy.xpath('//input[@name="first_name"]').type('Kanishk')
        //cy.xpath('//input[@id="ContactUsFrm_email"]').type('kanishchaddha1999@gmail.com')
        //cy.xpath('//*[@id="ContactUsFrm_enquiry"]').type('About us')
        //cy.xpath('//button[@title="Submit"]').click()
        //cy.xpath("//*[contains(text(),'successfully')]").should('have.text','Your enquiry has been successfully sent to the store owner!')  
    });
});