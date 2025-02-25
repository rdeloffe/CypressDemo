class Login {
    navigate(){
        cy.visit('https://www.oralb.fr/fr-fr/produits-dentaires/brosses-a-dents-electriques');
        // cy.visit('http://automationexercise.com');
        cy.url().should('include','automationexercise.com');
        cy.get('a > img').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible');
        cy.get('#slider-carousel > .carousel-inner').should('be.visible');
        cy.get('section[style="height: auto !important;"]').should('be.visible');        
    }

    clickSignLogin(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.url().should('include','login');

    }


}
export default Login;