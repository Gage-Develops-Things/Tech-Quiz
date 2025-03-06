describe('It goes to homepage and clicks buttons', () => {
    beforeEach('visits the home page', () => {
      cy.visit('http://localhost:3000')
    });

    it('should click the start button', () => {
        cy.get('button').click()
    });

    it('should start the quiz and display the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
      });

      it('should answer questions and complete the quiz', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('div').should('be.visible').and('contain', 'Your score');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('h2').should('be.visible')
      });
});