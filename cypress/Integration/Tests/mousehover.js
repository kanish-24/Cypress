describe('Test suite', () => {
    it('mouse hover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.xpath("//button[@id='mousehover']").click()
        cy.get("#mousehover").invoke('show')
        cy.xpath("//*[contains(text(),'Top')]")
        cy.url().should('include','Top')


        
    });

    it('mouse hover 2', () => {
        
        cy.get("#mousehover").trigger("mouseover")
        cy.xpath("//*[contains(text(),'Top')]")
        cy.url().should('include','Top')
    });

    it('right click me', () => {
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").click();
        cy.xpath("//button[@ondblclick='myFunction()']").click();
        
    });
    it.only('drag & drop', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop");
        cy.get("#draggable").trigger('mousedown',{which:1})
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})
});
});