const { expect } = require('@playwright/test')


class LoginPage{

    constructor(page){

      this.page = page;
      this.hoverSignIn = page.locator("#nav-link-accountList");
      this.email = page.locator("#ap_email");
      this.continue = page.locator("input.a-button-input");
      this.password = page.locator("#ap_password");
      this.signIn = page.locator("#signInSubmit");
        
    }

    async goTo(){

        await this.page.goto("https://www.amazon.in/");
    }

    

    async validateLogin(email, password){
      
        await this.hoverSignIn.click();
        await this.email.fill(email);
        await this.continue.click();
        await this.password.fill(password);
        await this.signIn.click();
    }
}


module.exports = {LoginPage};