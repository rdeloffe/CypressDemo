class Ajout_Panier{
    navigate(){
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    }

    ajout(){
        cy.get('button.btn_primary.btn_inventory').eq(0).click(); 
        cy.get('button.btn_primary.btn_inventory').eq(0).click();
        return this
    }

    panier(){
        cy.get('#shopping_cart_container').click()
        return this
    }
}
export default Ajout_Panier
