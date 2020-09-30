"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const loginPage_1 = __importDefault(require("../gondola_test_site/loginPage"));
const thankyouPage_1 = __importDefault(require("./newWelcomePage/thankyouPage"));
let pricingPage = class pricingPage {
    constructor() {
        this.btContactSale = "//a[contains(.,'Contact Sales')]";
        this.btFreeSignUp = "//a[contains(.,'Free Sign Up')]";
        this.btFreeDownload = "//a[contains(.,'Free Download')]";
        this.lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
        this.lnkHeaderLoguot = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Logout']";
        this.lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
        // Notificationbar dialog
        this.dialogNotificationbar = "//div[@id='notify_active']";
        this.btCloseNotify = "//button[@id='close_notify_active']";
        this.btActiveNotify = "//a[contains(.,'Active account')]";
    }
    async openLink(link) {
        // await gondola.waitForElement(this.lnk_WhyGondola);    
        // await gondola.click(this.lnk_WhyGondola);
        await gondolajs_1.gondola.waitForElement(link, 10);
        await gondolajs_1.gondola.click(link);
    }
    async verifyNotificationBar() {
        await gondolajs_1.gondola.waitForElement(this.dialogNotificationbar, 5);
        await gondolajs_1.gondola.checkControlExist(this.dialogNotificationbar);
    }
    async closeNotificationBar() {
        await gondolajs_1.gondola.waitForElement(this.dialogNotificationbar, 10);
        await gondolajs_1.gondola.checkControlExist(this.btCloseNotify);
        await gondolajs_1.gondola.click(this.btCloseNotify);
    }
    async checkGUIbeforeLogin() {
        await gondolajs_1.gondola.waitForElement(this.btContactSale, 20);
        await gondolajs_1.gondola.checkControlExist(this.btContactSale);
        await gondolajs_1.gondola.checkControlExist(this.btFreeSignUp);
    }
    async checkGUIafterLoginInactiveAccount(email, password) {
        if (await gondolajs_1.gondola.doesControlExist(this.lnkHeaderAccount)) {
            await gondolajs_1.gondola.click(this.lnkHeaderAccount);
            await gondolajs_1.gondola.click(this.lnkHeaderLoguot);
        }
        await gondolajs_1.gondola.click(this.lnkHeaderLogIn);
        await loginPage_1.default.login(email, password);
        await thankyouPage_1.default.verifyNotificationBar();
        await thankyouPage_1.default.closeNotificationBar();
        await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
        await gondolajs_1.gondola.waitForElement(this.btContactSale, 20);
        await gondolajs_1.gondola.checkControlExist(this.btContactSale);
        await gondolajs_1.gondola.checkControlExist(this.btFreeDownload);
    }
    async checkGUIafterLoginActiveAccount(email, password) {
        if (await gondolajs_1.gondola.doesControlExist(this.lnkHeaderAccount)) {
            await gondolajs_1.gondola.click(this.lnkHeaderAccount);
            await gondolajs_1.gondola.click(this.lnkHeaderLoguot);
        }
        await gondolajs_1.gondola.click(this.lnkHeaderLogIn);
        await loginPage_1.default.login(email, password);
        await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
        await gondolajs_1.gondola.waitForElement(this.btContactSale, 20);
        await gondolajs_1.gondola.checkControlExist(this.btContactSale);
        await gondolajs_1.gondola.checkControlExist(this.btFreeDownload);
    }
};
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "btContactSale", void 0);
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "lnkHeaderLogIn", void 0);
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "lnkHeaderLoguot", void 0);
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "lnkHeaderAccount", void 0);
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "dialogNotificationbar", void 0);
__decorate([
    gondolajs_1.action(" click link")
], pricingPage.prototype, "openLink", null);
__decorate([
    gondolajs_1.action("verify notification bar")
], pricingPage.prototype, "verifyNotificationBar", null);
__decorate([
    gondolajs_1.action("close notification bar")
], pricingPage.prototype, "closeNotificationBar", null);
__decorate([
    gondolajs_1.action("check GUI before login")
], pricingPage.prototype, "checkGUIbeforeLogin", null);
__decorate([
    gondolajs_1.action("check GUI after login with inactive account")
], pricingPage.prototype, "checkGUIafterLoginInactiveAccount", null);
__decorate([
    gondolajs_1.action("check GUI after login with active account")
], pricingPage.prototype, "checkGUIafterLoginActiveAccount", null);
pricingPage = __decorate([
    gondolajs_1.page
], pricingPage);
exports.pricingPage = pricingPage;
exports.default = new pricingPage();
//# sourceMappingURL=pricingPage.js.map