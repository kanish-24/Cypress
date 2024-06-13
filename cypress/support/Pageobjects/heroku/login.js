class LoginPage{

    // Page object model, where i am defining my objects and methods for user actions separately
    // in this class, we are implementing login code of heroku
    visiturl(){
        cy.visit('https://the-internet.herokuapp.com/login')

    }

    Login(){
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        
    }
}
export default LoginPage;