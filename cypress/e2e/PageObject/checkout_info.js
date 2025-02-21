class Checkout {
    check_button(){
        cy.get('.btn_action').click()   
        return this
    }

    Infofn(fn = 'Pactrick'){
        cy.get('#first-name')
        .clear()
        .type(fn)
        return this
    }

    Infoln(ln = 'Deloffe'){
        cy.get('#last-name')
        .clear()
        .type(ln)
        return this
    }

    Infopc(pc = 59400){
        cy.get('#postal-code')
        .type(pc)
        return this
    }
    continue(){
        cy.get('.btn_primary').click()
        return this
    }
    fini(){
        cy.get('.btn_action').click()
        return this
    }
}
export default Checkout