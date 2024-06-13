///<reference types="@cypress/xpath"/>

const { it } = require("mocha");

describe('test suite', () => {
    it('1st test case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
       cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        

        cy.xpath('//input[@name="username"]').type('Admin');
        cy.xpath('//input[@type="password"]').type('admin123');
        cy.xpath('//button[@type="submit"]').click();
        cy.get('[type="submit"]').click()
        cy.contains('Admin').click();
        cy.get(".oxd-userdropdown-name").click()
        cy.xpath('//a[@href="/web/index.php/auth/logout"]').click();

    });
    
});