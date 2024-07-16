///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Alert', () => {
    it('Test -1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('input[value="Alert"]').click()

        cy.on('window:alert',(alertmsg)=>{

            expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')

            return true; // Here true will check ok button

            
            })
        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(confirmmsg)=>{

            expect(confirmmsg).to.equal('Hello , Are you sure you want to confirm?');

            return true; // Here true will check ok button
        })
        })
    });
