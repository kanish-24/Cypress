///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Tabs Test', () => {
    it.skip('Test-1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // invoke() method is used to remove attribute
        cy.contains('Open Tab').invoke('removeAttr','target').click();
        // origin --> when we are working on different url's
        cy.origin('https://www.qaclickacademy.com/',()=>{

        // whatever actions that i have to perform in this url
        // that code i am going to write in this function
        cy.contains('Access all our Courses').click();
        })  
        });
        it('Window test', () => {

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

            cy.contains('Open Window').invoke('removeAttr','onclick').click();
    
            cy.origin('https://www.qaclickacademy.com/',()=>{
 
            cy.visit('')
            cy.contains('Access all our Courses').click();

            })
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            
            cy.contains('Home').click();
        });
        
    });
