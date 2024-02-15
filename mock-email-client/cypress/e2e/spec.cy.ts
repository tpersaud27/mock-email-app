describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Smeg Email');
  });
});

describe('Test Login Credentials', () => {
  it('should retrieve credentials', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    cy.log('username ' + username + ' password ' + password);
  });

  it('should get response from sessionStorage', () => {
    cy.window().its('sessionStorage').invoke('getItem', 'token').should('exist');
  });
});
