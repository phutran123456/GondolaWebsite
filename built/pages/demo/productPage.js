"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let productPage = class productPage {
    constructor() {
        this.elmItems = "//div[@class='item']";
        this.lblPageTitle = "//main[@class='capsule']//h1";
        this.lnkTopMenuWomen = "//div[@class='navarea']//ul/a[.=\"Women's\"]";
        this.lnkTopMenuSale = "//div[@class='navarea']//ul/a[.=\"Sale\"]";
        this.lnkTopMenuShoppingCart = "//div[@class='navarea']//a[@href='/cart']";
        this.lblCartCount = "//div[@class='cartcount']";
    }
    async addToCart(productName, cartCount = 1) {
        let patternLocator = "//div[@class='item' and ./p[text()='%s']]/button";
        let realLocator = patternLocator.replace('%s', productName);
        await gondolajs_1.gondola.waitForElement(realLocator);
        await gondolajs_1.gondola.click(realLocator);
        await gondolajs_1.gondola.waitForElementProperty(this.lblCartCount, "innerText", cartCount.toString(), 5);
    }
    async checkSalePageTitleDisplayed() {
        await gondolajs_1.gondola.checkControlExist(this.lblPageTitle);
        await gondolajs_1.gondola.checkControlProperty(this.lblPageTitle, "innerText", "Sale");
    }
    async checkAllSaleLabelsDisplayed() {
        let count = await gondolajs_1.gondola.getElementCount(this.elmItems);
        while (--count > 0) {
            await gondolajs_1.gondola.checkControlExist(`${this.elmItems}[${count}]//span[text()='Sale']`);
        }
    }
    async openShoppingCart() {
        await gondolajs_1.gondola.waitForElement(this.lnkTopMenuShoppingCart);
        await gondolajs_1.gondola.click(this.lnkTopMenuShoppingCart);
    }
};
__decorate([
    gondolajs_1.locator
], productPage.prototype, "elmItems", void 0);
__decorate([
    gondolajs_1.locator
], productPage.prototype, "lblPageTitle", void 0);
__decorate([
    gondolajs_1.locator
], productPage.prototype, "lnkTopMenuWomen", void 0);
__decorate([
    gondolajs_1.locator
], productPage.prototype, "lnkTopMenuSale", void 0);
__decorate([
    gondolajs_1.locator
], productPage.prototype, "lnkTopMenuShoppingCart", void 0);
__decorate([
    gondolajs_1.locator
], productPage.prototype, "lblCartCount", void 0);
__decorate([
    gondolajs_1.action("add item to cart", "Add product to cart")
], productPage.prototype, "addToCart", null);
__decorate([
    gondolajs_1.action("check page title displayed", "Check 'Sale' page title is displayed")
], productPage.prototype, "checkSalePageTitleDisplayed", null);
__decorate([
    gondolajs_1.action("check all sale labels exist", "Check 'Sale' label displayed in all products")
], productPage.prototype, "checkAllSaleLabelsDisplayed", null);
__decorate([
    gondolajs_1.action("open shopping cart", "Open shopping cart by clicking on cart menu on the top")
], productPage.prototype, "openShoppingCart", null);
productPage = __decorate([
    gondolajs_1.page
], productPage);
exports.productPage = productPage;
exports.default = new productPage();
//# sourceMappingURL=productPage.js.map