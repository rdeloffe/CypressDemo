class Trie {
    navigate(){
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    }

    trie(){
        cy.get('select[class="product_sort_container"]').select(['Price (high to low)'])
        return this
    }
}
export default Trie