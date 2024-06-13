describe('working with windows & tabs', () => {
    it('open tab', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com/")
            cy.contains('Access all our Courses').click()

            
    });
    it.only('open window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin("https://www.qaclickacademy.com/",()=>{
        
        cy.visit('/')

        cy.contains('Access all our Courses').click()
        
        //cy.xpath("//a[@href='https://www.qaclickacademy.com/blog']")
        })
        cy.log(cy.title())
    });
        
    });

