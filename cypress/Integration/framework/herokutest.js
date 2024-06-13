import LoginPage from "../../support/Pageobjects/heroku/login";



describe('Heroku test', () => {

    const login = new LoginPage(); // object of login page class

    // we create objects when we want to access the methods in that class
    it('Login test', () => {

        login.visiturl(); //calling my methods from page class
        login.Login();
        
    });
});