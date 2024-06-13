describe('Test suite - facebook - collection of test cases', () => {
    it('login test', () => {
        // passing the url
        cy.visit('https://www.facebook.com/')
        // enter the username
        
        cy.get("input[data-testid='royal_email']").type('Kanishkch')
        //cy.get('#email').type('Kanishk');
        //cy.get("input[placeholder='Email address or phone number']").type('8900078654')

        //enter password
        cy.get("Input[type='password']").type('password')
        //cy.get('#pass').type('12345kc');

    });
});