describe('Test Suite', () => {
  it ('Test First name', () => {

      let firstname = "John"
      let lastname = "Doe"

      cy.visit('/')

      cy.get('#text1').should('be.visible')

      cy.get('#text1').type(firstname)

      cy.get('#text1').should('have.value',firstname)

      cy.wait(15000)
      cy.get('#text2').type(lastname)

      // cy.get('#check13').should('be.visible')
      cy.get('#check3').check()
      cy.get('#radio2').check()

  })
})


