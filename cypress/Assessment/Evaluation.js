///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Automation Test Store - Test suite', () => {
    it('Test - 1', () => {

        // visit/open the url
        cy.visit('https://automationteststore.com/');

        cy.xpath("(//a[contains(text(),'accessories')])[2]").click();

        cy.contains('T-shirts').click({force:true});

        //cy.contains('  Apparel & accessories').select().should('have.text','    T-shirts');

        // click on white T-shirt
        cy.xpath('(//a[@class="details"])[3]').click({force:true});

        // Change the colour of t-shirt
        cy.contains('Colour').click()
        cy.xpath("//option[contains(text(),'White  (998833 In Stock)')]").select({force:true}).should('be.visible');
        //cy.get('[value="775"]').select().should('have.text','White  (998909 In Stock)')

        // change the size of T-shirt
        cy.get('#option351').click()

        cy.get('[value="776"]').select().should('have.text','Small  Out of Stock');

        // change the quantity of the t-shirts
        cy.get('#product_quantity').type(2);

        // Add the t-shirts to cart by clicking on add to cart button
        cy.xpath('//a[@class="cart"]').click();

        // click on checkout option
        cy.get('#cart_checkout2').click();

        // check the guest button
        cy.get('[value="guest"]').check().should('be.checked');

        // click on continue
        cy.get('[title="Continue"]').click();

        // enter first name
        cy.get('[name="firstname"]').type('Kanishk');

        // enter last name
        cy.get('[name="lastname"]').type('Chaddha');

        // enter email id
        cy.get('#guestFrm_email').type('kanishchaddha99@gmail.com');

        // enter telephone/mobile number
        cy.get('[name="telephone"]').type('8889878899');

        // enter address 1
        cy.get('[name="address_1"]').type('Mansarovar, Lal Kuan');

        // enter city name
        cy.get('[name="city"]').type('Ghaziabad');

        // 
        cy.get('#guestFrm_zone_id').click();

        cy.xpath('(//option[@value="3516"])[1]').select().should('have.text','Angus');

        cy.get('[name="postcode"]').type('201001');

        cy.get('[name="country_id"]').click();

        cy.xpath('(//option[@value="204"])[1]').select().should('have.text','Switzerland');

        cy.get('[title="Continue"]').click();

        cy.get('[title="Confirm Order"]').click();

        cy.contains('successfully').should('have.text','Your order has been successfully processed!');
        
        //cy.get('[title="Continue"]').click();

        //cy.go('close');
    });
});