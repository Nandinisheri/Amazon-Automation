const {test} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');

test('Login Functionality',async ({page})=>{

    const email = "nandinisheri07@gmail.com";
    const password = "Nandinisheri@123";
    const loginpage = new LoginPage(page);
    await loginpage.goTo();
    await loginpage.validateLogin(email,password);



});

