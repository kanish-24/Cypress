// describe and it blocks are from mocha library
// This is how we write test cases in cypress
// This file is also called as spec

describe('Test suite - collection of test cases', () => {
    // Describe is a block, where you will write multiple test scripts
    it('Test-1', () => {
        // It block is your test script - 1st test

        // cy is my cypress object
        // Using cy I can write my cypress commands
        // cy.visit is used to enter the URL inside the browser

        cy.visit('https://the-internet.herokuapp.com/login');
        // Absolute xpath for username

        //cy.xpath('html/body/div[2]/div/div/form/div[1]/div/input').type('tomsmith');
        // Absolute xpath for password
        //cy.xpath('html/body/div[2]/div/div/form/div[2]/div/input').type('SuperSecretPassword!');

        // Relative xpath
        // Relative xpath for username
        cy.xpath('//input[@name="username"]').type('tomsmith');
        // Relative xpath for password
        cy.xpath('//input[@id="password"]').type('SuperSecretPassword!');
        // Relative xpath for login button
        cy.xpath('//button[@type="submit"]').click();

    });
    it.only('ebay test suite', () => {
        cy.visit('https://www.ebay.com/');

        // utilize text function to select the xpath and click on the links
        cy.xpath("//a[text()=' Daily Deals']").click();

        cy.xpath("//a[.=' Sell']").click();

        cy.xpath("//a[.=' Help & Contact']").click();
        
    });
});