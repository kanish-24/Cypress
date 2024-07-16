
import { expect } from "chai";
import { Before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given(('User launch the browser and open the url'),()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form?')

})
When(('when user enters the first name, last name, email-id, contact us, message'),()=>{
    // enter your first name
    cy.get('#firstName').type('Kanishk')
    // enter your last name
    cy.get('#lastName').type('Chaddha')
    // enter your email id
    cy.get('#email').type('kanishchaddha1999@gmail.com')
    // enter your contact number
    cy.get('#number').type('8800796990');
    // enter the message
    cy.contains('Message').type('What is the training process')

})

And(('clicks on submit button'),()=>{
    
    // click on submit button
    cy.get('[value="submit"]').click();

})
Then(('An alert saying Thank You for reaching out to us message should be displayed'),()=>{
    //cy.contains('reaching out to us')
    cy.on("window:confirm"),(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, Kanishk Chaddha')
        return(true);
    }
})




