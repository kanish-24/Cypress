class logout_po{

    visiturl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    Logout(){
       
        //cy.xpath("//li[@class='oxd-userdropdown']").click()
        cy.xpath("//span[@class='oxd-userdropdown-tab']")
        
        cy.xpath("//*[contains(text(),'Logout')]").click()
    
        
    }
}
export default Logout_po;