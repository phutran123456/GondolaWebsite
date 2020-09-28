"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let contactUsPage = class contactUsPage {
    constructor() {
        // Notificationbar dialog
        this.dialogNotificationbar = "//div[@id='notify_active']";
        this.btCloseNotify = "//button[@id='close_notify_active']";
        this.btActiveNotify = "//a[contains(.,'Active account')]";
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
], contactUsPage.prototype, "dialogNotificationbar", void 0);
__decorate([
    gondolajs_1.action("verify notification bar")
], contactUsPage.prototype, "verifyNotificationBar", null);
__decorate([
    gondolajs_1.action("close notification bar")
], contactUsPage.prototype, "closeNotificationBar", null);
contactUsPage = __decorate([
    gondolajs_1.page
], contactUsPage);
exports.contactUsPage = contactUsPage;
exports.default = new contactUsPage();
//# sourceMappingURL=contactsales.js.map