///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Web table test', () => {
    it('Test -1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[2]').should('include.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool')
    });

    it.only('Test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{

            if($ele.text().includes('Selenium')){

                cy.wrap($ele).next().then((num)=>{

                    cy.log(num.text());
                })
            }

        })

        
    });
});