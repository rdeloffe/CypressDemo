import Login from "./PageObject/Object_new_exo/login";

describe('Test Case 1: Register User' , () => {
    it ('Navigate to url' , () => {
        const loginpage = new Login();
        loginpage.navigate();
    })

    it ('Click on Signup / Login button' , () => {
        const loginpage = new Login();
        loginpage.navigate();
        loginpage.clickSignLogin();
    })
})