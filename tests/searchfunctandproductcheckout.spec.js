const { test } = require('@playwright/test');
const { SearchFunctAndProductCheckOut } = require('../pageobjects/SearchFunctAndProductCheckOut');
const { LoginPage } = require('../pageobjects/LoginPage');


test('Validating Search Functionality', async ({browser})=>{
    
    const context = await browser.newContext();
    const page = await context.newPage();
   

    const productName = "womens summer tops";
    const email = "nandinisheri07@gmail.com";
    const password = "Nandinisheri@123";
    const loginpage = new LoginPage(page);
    const search = new SearchFunctAndProductCheckOut(page);
    loginpage.goTo();

    const [newpage] = await search.searchProduct(productName,context);
    await search.addToCartFunct(newpage);
    await search.buy(newpage);
    await loginpage.validateLogin(email,password);
    
    
});