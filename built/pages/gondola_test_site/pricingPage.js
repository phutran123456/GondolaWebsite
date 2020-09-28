"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let pricingPage = class pricingPage {
    constructor() {
        this.lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
        this.btContactSale = "//a[contains(.,'Contact Sales')]";
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
};
__decorate([
    gondolajs_1.locator
], pricingPage.prototype, "lnkHeaderLogIn", void 0);
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
pricingPage = __decorate([
    gondolajs_1.page
], pricingPage);
exports.pricingPage = pricingPage;
exports.default = new pricingPage();
//# sourceMappingURL=pricingPage.js.map