import Login_po from "../../support/Pageobjects/orangeHrm/loginpage";
import Logout_po from "../../support/Pageobjects/orangeHrm/logoutpage";
describe('Orange HRM Test', () => {
    const login = new Login_po(); // object of login page class
    const logout = new Logout_po();
    // we create objects when we want to access the methods in that class

    it('Login Test', () => {

        login.visiturl(); //calling my methods from page class
        login.Login();
    });
    it.only('Logout test', () => {
        
        logout.visiturl();
        logout.Logout();
        
    });
});