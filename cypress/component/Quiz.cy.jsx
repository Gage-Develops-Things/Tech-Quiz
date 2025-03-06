import Quiz from '../../client/src/components/Quiz'
describe('<Quiz /> Component', () => {
    beforeEach('visits the homepage', () => {
        cy.fixture('questions').then((fixture) => {
            cy.intercept('POST', '/api/questions/random', {
              statusCode: 201,
              body: fixture
            }).as('getRandomQuestion');
          });
    });

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('2').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });
});