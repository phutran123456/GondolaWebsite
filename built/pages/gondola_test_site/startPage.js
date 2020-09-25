"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let startPage = class startPage {
    constructor() {
        this.lnk_WhyGondola = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Why Gondola?']";
        this.lnk_Features = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Features']";
        this.lnk_Pricing = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Pricing']";
        this.dialog_notificationbar = "";
    }
    async openLink(link) {
        // await gondola.waitForElement(this.lnk_WhyGondola);    
        // await gondola.click(this.lnk_WhyGondola);
        await gondolajs_1.gondola.waitForElement(link);
        await gondolajs_1.gondola.click(link);
    }
    async verifyNotificationBar() {
        await gondolajs_1.gondola.waitForElement(this.dialog_notificationbar);
        await gondolajs_1.gondola.checkControlExist(this.dialog_notificationbar);
    }
};
__decorate([
    gondolajs_1.locator
], startPage.prototype, "lnk_WhyGondola", void 0);
__decorate([
    gondolajs_1.action(" click link")
], startPage.prototype, "openLink", null);
__decorate([
    gondolajs_1.action("verify notification bar")
], startPage.prototype, "verifyNotificationBar", null);
startPage = __decorate([
    gondolajs_1.page
], startPage);
exports.startPage = startPage;
exports.default = new startPage();
//# sourceMappingURL=startPage.js.map