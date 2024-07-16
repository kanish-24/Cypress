///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>
describe('Dynamic dropdown', () => {
    it('Test 1', () => {

        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // cy.get('.ui-autocomplete-input').type('Arg')

        // cy.get('.ui-menu-item').each(($option)=>{

        //     if($option.text()=='Argentina'){

        //         cy.wrap($option).click();
        //     }
        

        });
        it('Dynamic dropdown easy approach', () => {

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            // type in the dynamic dropdown
            cy.get('.ui-autocomplete-input').type('fin');
            // click on any item by using contains function
            cy.get('.ui-menu-item').contains('Finland').click();

            
        });
        it.only('Dynamic dropdown OrangeHRM', () => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // To enter the username
            cy.get('input[name="username"]').type('Admin');
        // To enter the password
            cy.get('input[type="password"]').type('admin123');
        // To click on login button
            cy.get('button[type="submit"]').click();
        // click on Admin
            cy.contains('Admin').click();
            
        
            
        // Type first 4 letters of employee name in employee textfield
            cy.get('[placeholder="Type for hints..."]').type('jame')
        // scroll up
            //cy.scrollTo(0,-3000);
        // click on relevant option/emplyee name
            cy.xpath("//span[contains(text(),'James  Butler')]").click();

            
        });
    });
