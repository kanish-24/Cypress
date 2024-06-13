
describe('Test suite', () => {
    it('Login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // visit the website
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        // enter the username
        cy.xpath("//input[@type='password']").type('admin123');
        // enter the password
        cy.xpath("//button[@type='submit']").click();
        // click on submit
        cy.xpath("(//li[@class='oxd-main-menu-item-wrapper'])[1]").click()
        //click on Admin
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type('abcdy')
        cy.xpath("(//div[@class='oxd-select-text--after'])[1]").click().select('Admin')
        //cy.contains('Admin').click()
        cy.xpath("//input[@placeholder='Type for hints...']").type('Ranga  Akunuri')
        //type employee first name for hints
        //cy.xpath("//input[@placeholder='Type for hints...']").select('Ranga  Akunuri')
        //select Ranga Kumari
        cy.xpath("(//div[@class='oxd-select-text--after'])[2]").click()
        //click on status dropdown
        cy.xpath("(//div[contains(text(),'Enabled')])[1]").select('Enabled') 
        // select employee status as Enabled
        cy.xpath("//button[@type='submit']").click() 
        // click on search button
        
        
    });
    it('james butler', () => {
        //cy.xpath("//input[@placeholder='Type for hints...']").type('James')
        //type james 
        cy.xpath("//input[@placeholder='Type for hints...']").type('James  Butler')
        //type James Butler
        cy.xpath("(//div[contains(text(),'Enabled')])[1]").select('Enabled')
        //Select status enabled
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//p[contains(text(),'manda user')]").click()
        cy.xpath("//span[@class='oxd-userdropdown-tab']").select('Logout')

        
    });
    
        
        
   
});