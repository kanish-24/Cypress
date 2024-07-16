class Link_po{

    // method to click on any link in the webpage

    // parameter is passed, the text in the parameter

    // Generic method to click on any link
    LinkClick(link){

        // This will click on any link
        cy.contains(link).click();
    }
}

export default Link_po;