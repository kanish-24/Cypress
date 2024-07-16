
class Logout_page{

    visiturl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    Logout2(){

        cy.get('.oxd-userdropdown-icon').click()
        
        cy.contains('Logout').select();
    }

}

export default Logout_page;