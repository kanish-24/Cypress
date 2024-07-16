///<reference types="cypress"/>

describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {

        // To visit the url
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // To enter the username
        cy.get('input[name="username"]').type('Admin');
        // To enter the password
        cy.get('input[type="password"]').type('admin123');
        // To click on login button
        cy.get('button[type="submit"]').click();
        
    });
    it('facebook login', () => {
        cy.visit('https://www.facebook.com/');

        cy.get('input#email').type('kanishchaddha1999@gmail.com');

        cy.get('#pass').type('kanish123');

        cy.get('#loginbutton').click();

        // locator for forgotten password
        //cy.get('._97w4').click();
        
    });
});