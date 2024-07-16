///<reference types="cypress"/>
describe('test suite', () => {

    before(()=>{
        cy.fixture('example').then((data)=>{
            globalThis.data =data;

        });
    });
    it('login test', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        
        cy.get('[name="username"]').type(data.username)
        cy.get('[name="password"]').type(data.password)
        cy.get('.radius').click()

    });
});
