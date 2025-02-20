describe('Test Suite', () => {
  it ('Test First name', () => {

      // let firstname = "John"
      // let lastname = "Doe"

      cy.visit('/')

      //Exo Zoé

      cy.get('[data-target="#navigation"]').click()

      cy.get('#navigation').should('have.class', 'show'); // Vérifie que le menu s'affiche

      cy.get('a[title="Toolbox"]').click()
      cy.url().should('include', '/toolbox/');
      
      cy.wait(17000)
      cy.get('button.pum-close').click()

      

      cy.get('a[href="https://hightest.nc/ressources/test-istqb.php"]').should('be.visible');

      cy.get('a[href="https://hightest.nc/ressources/test-istqb.php"]')
      .should('have.attr', 'target', '_blank') // Vérifie qu'il s'ouvre dans un nouvel onglet
      .should('have.attr', 'href', 'https://hightest.nc/ressources/test-istqb.php'); // Vérifie l'URL

      cy.get('a[href="https://hightest.nc/ressources/test-istqb.php"]')
      .invoke('removeAttr', 'target') // Supprime target="_blank"
      .click();

      cy.url().should('include', '/ressources/test-istqb.php'); // Vérifie l'URL après clic




      // cy.get('button[onclick="myFunction()"]').click()

















      //Exo Demo
      // cy.get('#cookieChoiceDismiss').click()

      // cy.get('#text1').should('be.visible').type(firstname);

      // cy.get('#text1').should('have.value', firstname);

      // // Supprimer l'attribut disabled sur #text2 s'il est présent
      // cy.get('#text2').invoke('removeAttr', 'disabled');

      // cy.get('#text2')
      //   .should('be.visible')
      //   .type(lastname);




      // // cy.get('#check13').should('be.visible')
      // cy.get('#check3').check()
      // cy.get('#radio2').check()
      // cy.get('input[name="img"]').attachFile('meme.png');

      // cy.get('select[name="FromLB"]').select(['USA', 'Russia', 'France', 'Japan']);

      // cy.get('input[onclick="move(this.form.FromLB,this.form.ToLB)"]').click()

      // cy.get('button[onclick="myFunction()"]').click()
      // //Si id=demo window.console == you pressed OK  
      // cy.get('#demo').should('have.text' , 'You pressed OK!');

      // cy.get('input[onclick="myFunction1()"').click()

      

  })   
})


