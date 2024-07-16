///<reference types="cypress"/>
describe('OrangeHrm - Data driven test', () => {
// Hooks in cypress
// before block will be executed before a describe block
    before(() => {

        // I have to configure example.json file for data driven testing
    
        cy.fixture('example').then((data)=>{
    
        globalThis.data = data; // we are initializing the data coming from example.json

        })
        

});
it('Orange Hrm Login test', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type(data.username);
    // To enter the password
    cy.get('input[type="password"]').type(data.password);
    // To click on login button
    cy.get('button[type="submit"]').click();
    
});


        
});
    
