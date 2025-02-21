import Login from "./PageObject/login";
import Trie from "./PageObject/Trie_article";
import Ajout_Panier from "./PageObject/ajout_panier";
import Checkout from "./PageObject/checkout_info";

describe('Sauce demo', () => {


    it ('Test locker_user' , () => {
        //
        const loginpage = new Login();
        loginpage.navigate();
        loginpage.Username('locked_out_user');
        loginpage.Password();
        loginpage.submit_error();
    })

    it ('Connection' , () => {
        //
        const loginpage = new Login();
        loginpage.navigate();
        loginpage.Username();
        loginpage.Password();
        loginpage.submit_true();
    })


    it ('Tri article - au +' , () => {
        const Tri_DESC = new Trie();
        Tri_DESC.navigate();
        Tri_DESC.trie();

    })

    it('Ajout panier' , () => {
        const Panier_ajout = new Ajout_Panier();
        const Tri_DESC = new Trie();
        Panier_ajout.navigate();
        Tri_DESC.trie();
        Panier_ajout.ajout();
        Panier_ajout.panier();
        cy.wait(1000)      
    }) 

    it ('checkout + info' , () => {
        const Panier_ajout = new Ajout_Panier();
        const Tri_DESC = new Trie();
        Panier_ajout.navigate();
        Tri_DESC.trie();
        Panier_ajout.ajout();
        Panier_ajout.panier();
        cy.wait(1000)

        const Button_check = new Checkout();
        Button_check.check_button();
        Button_check.Infofn();
        Button_check.Infoln();
        Button_check.Infopc();
        Button_check.continue();
        Button_check.fini();
    })






    
})