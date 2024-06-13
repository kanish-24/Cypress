
import { expect } from "chai";
import { Before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given(('user opens the simple form url'),()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})
When(('user enters first name,last name,email,contact number'),()=>{
    cy.xpath("//input[@placeholder='First Name']").type('Kanishk')
    cy.xpath("//input[@placeholder='Last Name']").type('Chaddha')
    cy.get('#email').type('kanishchaddha1999@gmail.com')
    cy.xpath("//input[@id='number']").type('8800796291')

})

And(('clicks on submit'),()=>{
    cy.xpath("//input[@type='submit']").click()

})
Then(('An alert saying successfull message has to be displayed'),()=>{
    //cy.contains('reaching out to us')
    cy.on("window:alert"),(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, Kanishk Chaddha')
        return(true);
    }
})






