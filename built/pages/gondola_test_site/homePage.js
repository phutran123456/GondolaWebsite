"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let homePage = class homePage {
    constructor() {
        this.lblPageTitle = "//main[@class='capsule']//h1";
        this.lnkTopMenuWomen = "//div[@class='navarea']//ul/a[.=\"Women's\"]";
        this.lnkTopMenuSale = "//div[@class='navarea']//ul/a[.=\"Sale\"]";
        this.lnkTopMenuShoppingCart = "//div[@class='navarea']//a[@href='/cart']";
        this.lblWomenHeader = "//h1[text()=\"Women's\"]";
        this._homePageUrl = "https://demo.gondolatest.com";
    }
    async navigateTo() {
        await gondolajs_1.gondola.navigate(this._homePageUrl);
        await gondolajs_1.gondola.maximize();
    }
    async checkPageTitleDisplayed() {
        await gondolajs_1.gondola.checkControlExist(this.lblPageTitle);
        await gondolajs_1.gondola.checkControlProperty(this.lblPageTitle, "innerText", "Shop");
    }
    async selectWomenTab() {
        await gondolajs_1.gondola.waitForElement(this.lnkTopMenuWomen);
        await gondolajs_1.gondola.click(this.lnkTopMenuWomen);
        await gondolajs_1.gondola.waitForElement(this.lblWomenHeader);
    }
};
__decorate([
    gondolajs_1.locator
], homePage.prototype, "lblPageTitle", void 0);
__decorate([
    gondolajs_1.locator
], homePage.prototype, "lnkTopMenuWomen", void 0);
__decorate([
    gondolajs_1.locator
], homePage.prototype, "lnkTopMenuSale", void 0);
__decorate([
    gondolajs_1.locator
], homePage.prototype, "lnkTopMenuShoppingCart", void 0);
__decorate([
    gondolajs_1.locator
], homePage.prototype, "lblWomenHeader", void 0);
__decorate([
    gondolajs_1.action("open demo web", "Navigate to home page")
], homePage.prototype, "navigateTo", null);
__decorate([
    gondolajs_1.action("check page title displayed", "Check 'Sale' page title is displayed")
], homePage.prototype, "checkPageTitleDisplayed", null);
__decorate([
    gondolajs_1.action("select women's tab", "Click the Women's link on top menu bar")
], homePage.prototype, "selectWomenTab", null);
homePage = __decorate([
    gondolajs_1.page
], homePage);
exports.homePage = homePage;
exports.default = new homePage();
//# sourceMappingURL=homePage.js.map