class Ajout_Panier{
    navigate(){
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.url().should('include','/inventory.html')
        return this
    }

    ajout(){
        cy.get('button.btn_primary.btn_inventory').eq(0).click(); 
        cy.get('button.btn_primary.btn_inventory').eq(0).click();
        cy.get('.fa-layers-counter.shopping_cart_badge').should('have.text','2')
        return this
    }

    panier(){
        cy.get('#shopping_cart_container').click()
        cy.url().should('include','/cart.html')
        return this
    }
}
export default Ajout_Panier
