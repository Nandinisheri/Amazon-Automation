class SearchFunctAndProductCheckOut{

    constructor(page){

        this.page = page;
        this.searchField = this.page.locator("#twotabsearchtextbox");
        this.searchIcon = this.page.locator("#nav-search-submit-button");
        this.productClick = this.page.locator("a[class='a-link-normal s-no-outline']");
    }

    async scroll(){

     await this.page.evaluate(()=>{

            window.scrollBy(0,50);
        });
    }

   async searchProduct(productName,context){

    await this.searchField.click();
    await this.searchField.fill(productName);
    await this.searchIcon.click();

    //Handling new page or child window
       const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        this.productClick.first().click(),    
    ]);

    return [newpage];
    }

    async addToCartFunct(newPage){
       await newPage.locator("input[id='add-to-cart-button']").click();
       await newPage.locator("#nav-cart-count-container").click();
    }

    async buy(newPage){
        await newPage.locator("input[data-feature-id='proceed-to-checkout-action']");
    }
}

module.exports = {SearchFunctAndProductCheckOut};