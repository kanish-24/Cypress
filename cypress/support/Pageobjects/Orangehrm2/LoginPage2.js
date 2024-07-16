class Login_po {

    EnterURL(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    }
    Login2(){

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[type='password']").type('admin123')
        cy.get("button[type='submit']").click()

    }
    clickonforgotPassword(){

        cy.get('.orangehrm-login-forgot-header').click();

    }


}

export default Login_po;