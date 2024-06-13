

describe('RS test suite', () => {
    it('check box test', () => {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       //in cypress check() to work with checkboxes/radio buttons
       cy.xpath("//input[@id='checkBoxOption1']").check().should('have.value','option1').and('have.attr','type')
       //cy.get("#checkBoxOption1").check()
       cy.xpath("//input[@id='checkBoxOption2']").check().should('have.value','option2')


    });

    it('multiple checks test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[type='checkbox']").check(['option1','option2','option3'])
        cy.get("input[type='checkbox']").uncheck(['option3'])


});
it('radio test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.checked')
    cy.get("[for='radio2']>[value='radio2']").check().should('have.value','radio2')
});

it('drop down test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
    cy.get("#dropdown-class-example").select('option2').should('have.value','option2')
    
});
// dynamic dropdown
it('dynamic drop down/Suggestion class tests', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get(".ui-autocomplete-input").type('ind');
    cy.get(".ui-menu-item").each(($el,index,$list) =>{
        if($el.text()=='India'){
            cy.wrap($el).click();
            // call back function
        }

    })
    
});

});