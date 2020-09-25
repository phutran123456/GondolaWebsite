"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const homePage_1 = __importDefault(require("../pages/gondola_test_site/homePage"));
const productPage_1 = __importDefault(require("../pages/gondola_test_site/productPage"));
const cartPage_1 = __importDefault(require("../pages/gondola_test_site/cartPage"));
const payment_1 = require("../data/payment");
gondolajs_1.TestModule("WebDriver sample tests");
const firstProduct = "Khaki Suede Polish Work Boots";
const secondProduct = "Camo Fang Backpack Jungle";
const validPayment = new payment_1.Payment();
const cartCount = 2;
/**
* Testcase 01: Check Cart items displayed correctly
*
* 1. Navigate to 'https://demo.gondolatest.com/'
* 2. Select "Women's" link on navigation bar.
* 3. Click 'Add to cart' button in 'Khaki Suede Polish Work Boots' and 'Camo Fang Backpack Jungle' product.
* 4. Select shopping cart.
* 5. Verify selected items displayed in cart page.
*/
gondolajs_1.TestCase("Testcase 01: Check Cart items displayed correctly", async () => {
    await homePage_1.default.navigateTo();
    await homePage_1.default.selectWomenTab();
    await productPage_1.default.addToCart(firstProduct);
    await productPage_1.default.addToCart(secondProduct, cartCount);
    await productPage_1.default.openShoppingCart();
    await cartPage_1.default.checkItemDisplayed(firstProduct);
    await cartPage_1.default.checkItemDisplayed(secondProduct);
});
/**
* Testcase 02: Check Payment button is enabled when user inputs valid information.
*
* 1. Navigate to 'https://demo.gondolatest.com/'
* 2. Verify that home page title displayed.
* 3. Select "Women's" link on navigation bar.
* 4. Click 'Add to cart' button in 'Khaki Suede Polish Work Boots' product and 'Camo Fang Backpack Jungle' product.
* 5. Select shopping cart.
* 6. Input VALID payment information.
* 7. Verify "PAY WITH CREDIT CARD" button is enabled.
*/
gondolajs_1.TestCase("Testcase 02: Check Payment button is enabled when user inputs valid information.", async () => {
    await homePage_1.default.navigateTo();
    await homePage_1.default.selectWomenTab();
    await productPage_1.default.addToCart(firstProduct);
    await productPage_1.default.addToCart(secondProduct, cartCount);
    await productPage_1.default.openShoppingCart();
    await cartPage_1.default.fillPaymentInfo(validPayment);
    await cartPage_1.default.checkPaymentButtonEnabled();
});
//# sourceMappingURL=sample_test.js.map