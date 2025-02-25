class Checkout {
    check_button(){
        cy.get('.btn_action').should('be.visible')   
        cy.get('.btn_action').click()   
        cy.url().should('include','/checkout-step-one.html')
        return this
    }

    Infofn(){
        //generate fn random
        let fn = Math.random().toString(36).substring(7)
        cy.get('#first-name')
        .clear()
        .type(fn)
        return this
    }

    Infoln(){
        let ln = Math.random().toString(36).substring(7)
        cy.get('#last-name')
        .clear()
        .type(ln)
        return this
    }

    Infopc(){
        let pc = Math.floor(Math.random() * 9999)
        cy.get('#postal-code')
        .type(pc)
        return this
    }
    continue(){
        cy.get('.btn_primary').click()
        cy.url().should('include','/checkout-step-two.html')
        return this
    }
    fini(){
        cy.get('.btn_action').click()
        cy.url().should('include','/checkout-complete.html')
        return this
    }
}
export default Checkout