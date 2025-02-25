class Login {
    navigate() {
        cy.visit('https://www.saucedemo.com/v1');
    }

    Username(username = 'standard_user') { 
        cy.get('#user-name')
            .clear()
            .type(username);
        return this;
    }

    Password(password = 'secret_sauce') { 
        cy.get('#password')
            .clear()
            .type(password);
        return this;
    }

    submit_error() {
        cy.get('#login-button').click();
        cy.get('h3[data-test="error"]').should('be.visible')
    }

    submit_true() {
        cy.get('#login-button').click();
        cy.url().should('include','/inventory.html')
    }


}
export default Login;
