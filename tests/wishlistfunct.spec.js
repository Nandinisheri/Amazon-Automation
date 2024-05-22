const { test,expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { SearchFunctAndProductCheckOut } = require('../pageobjects/SearchFunctAndProductCheckOut');

test('Validate Wishlist Functionality', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
   

    const email = "nandinisheri07@gmail.com";
    const password = "Nandinisheri@123";
    const loginpage = new LoginPage(page);
    await loginpage.goTo();
    await loginpage.validateLogin(email,password);
    const search = new SearchFunctAndProductCheckOut(page);
    const productName = "womens summer tops";
    const [newpage] = await search.searchProduct(productName,context);
    await  newpage.locator("#wishListMainButton").click();
 
});