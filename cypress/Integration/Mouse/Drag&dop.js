///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

describe('Drag and drop test', () => {
    it('Test-1', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop');

        // trigger - mouse operations
        // which: 1 --> To work with left button of mouse
        // which: 2 --> is for center button of the mouse
        // which: 3 --> is for right button of the mouse

        // click on football by using trigger method
        cy.get('#draggable').trigger('mousedown',{which: 1});
        // move the football with mousemove method to drpzone 1
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true}); // release the left button of the mouse
        
        // click on football by using trigger method
        cy.get('#draggable').trigger('mousedown',{which: 1});
        // move the football with mousemove method to drpzone 2
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force: true});
        
    });
});