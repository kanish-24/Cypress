///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Orange Hrm tests suite', () => {
    it('Test 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Assert username using expect & then
        cy.get('input[name="username"]').then(($username)=>{ // lambda function

            // expect is a method used for assertions
            expect($username).to.have.attr('placeholder','Username');

            // directly if we click on username
            // It will not work - it comes from jquery
            // To convert jquery variable to cypress object we have to wrap it
            cy.wrap($username).type('Admin');

        });
        // To enter the password
        cy.get('input[type="password"]').then(($password)=>{

            expect($password).to.have.attr('name','password');

            cy.wrap($password).type('admin123');
            
        }); // this is where callback function for password is ends
        // To click on login button
        cy.get('button[type="submit"]').then(($login)=>{

            expect($login).to.have.attr('type','submit');

            cy.wrap($login).click();
            
            // type Employee name in search textfield
            //cy.get('.oxd-input').type('James')
            // click on Admin button
            cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        });
        cy.get(".oxd-userdropdown-icon").then(($Dropdown)=>{

            expect($Dropdown).to.have.attr('class','oxd-icon bi-caret-down-fill oxd-userdropdown-icon');

            cy.wrap($Dropdown).click();
        });
       

        // looping - Iterate over each element and check the text of each element
        // using each - It is a jquery method
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown_ele)=>{

            // looping will start
            if($dropdown_ele.text()=='Logout'){

                // click on logout using wrap function
                cy.wrap($dropdown_ele).click();
            }
        });
        
    });
});