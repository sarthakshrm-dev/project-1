describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a').each(link => {
      cy.request(link.prop('href'))
    })
  })
})