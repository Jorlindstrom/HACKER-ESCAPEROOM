describe("Testing of Deployed Hacker Escape Rooms on Github Pages", () => {
    it("Webbsite should load correctly", () => {
        cy.visit("https://jorlindstrom.github.io/HACKER-ESCAPEROOM/index.html#");
        cy.get('h1').should('contain', 'Hacker Escape Rooms')    

    }); 
    it('Navigate to Online Challenges page', () => {
        cy.visit('https://jorlindstrom.github.io/HACKER-ESCAPEROOM/index.html#');
        cy.wait(3000);
        cy.get('.main-nav__container').should('be.visible');
        cy.get('.main-nav__item-link').contains('Play online').click();
        cy.url().should('include', '/challenges.html');
});
// Två ovan fungerar hittils 
it('Test filterfunction for challenges', () => {
    cy.visit('https://jorlindstrom.github.io/HACKER-ESCAPEROOM/challenges.html?filter=online');
    cy.wait(500); // Here needs to be a wait to make the test work probably because async function
    cy.get('.filterBtn').click();
    cy.wait(500); 
    cy.get('.filterWindow').should('have.class', 'filterWindow--active');
    // cy.get('.filterWindow', {timeout: 5000}).should('have.class', 'filterWindow--active');
    cy.get('.filterwindow__Challenges').should('be.visible');
    cy.get('.filterWindow__Search').should('be.visible');
    cy.get('.filterSearch_input').type('Revolution');
    cy.contains('.api-challenges', 'Revolution').should('be.visible');
    // cy.get('.challenge-list').should('have.length.greaterThan', 0);
});


it('Test if no element is found', () => {
    cy.visit('https://jorlindstrom.github.io/HACKER-ESCAPEROOM/challenges.html?filter=online');
    cy.wait(500); // Here needs to be a wait to make the test work probably because async function
    cy.get('.filterBtn').click(); 
    cy.wait(500);
    cy.get('.filterWindow').should('have.class', 'filterWindow--active');
    cy.get('.filterwindow__Challenges').should('be.visible');
    cy.get('.filterWindow__Search').should('be.visible');
    cy.get('.filterSearch_input').type('Date');
    cy.contains('.api-challenges', 'Date').should('be.visible');
  });
});
