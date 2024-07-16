class login_po{

    visiturl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    Login(){
       
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[type='password']").type('admin123')
        cy.get("button[type='submit']").click()
        
    }
}
export default Login_po;