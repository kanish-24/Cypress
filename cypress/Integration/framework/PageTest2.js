import Login_po from "../../support/Pageobjects/Orangehrm2/LoginPage2";
import Logout_page from "../../support/Pageobjects/Orangehrm2/LogoutPage2";
import Link_po from "../../support/Pageobjects/Orangehrm2/Link_Po";

describe('', () => {

    const Login2 = new Login_po();
    const Logout2 = new Logout_page();
    const link = new Link_po();

    it('Test - 1', () => {

        // Login

        Login_po.Enterurl();
        Login_po.Login();

        // clicking on link
        Link_po.linkclick('Admin');


        // Loging out
        Logout_page.logout();

        
    });
});