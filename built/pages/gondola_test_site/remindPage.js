"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let reminderPage = class reminderPage {
    constructor() {
        this.lnkResendActive = "//a[@id='send_code']";
        this.btActiveAccount = "//button[@id='btn_activation']";
        this.txtTitle = "//h1[.='Please Active Your Account']";
        this.txtContent = "//p[contains(.,'To verify your identity, a security code has been sent to you. Please check the')]";
        this.txtSecurityCode = "//input[@id='security_code_input']";
    }
    async checkGUI(value) {
        await gondolajs_1.gondola.waitForElement(this.txtTitle, 30);
        let isContentExist = (await gondolajs_1.gondola.getText(this.txtContent)).includes(value);
        await gondolajs_1.gondola.checkEqual(isContentExist, true, "matches found: " + value);
        await gondolajs_1.gondola.checkControlExist(this.txtTitle);
        await gondolajs_1.gondola.checkControlExist(this.btActiveAccount);
        await gondolajs_1.gondola.checkControlExist(this.lnkResendActive);
    }
    async checkMaximumNumberResendActive() {
    }
};
__decorate([
    gondolajs_1.locator
], reminderPage.prototype, "lnkResendActive", void 0);
reminderPage = __decorate([
    gondolajs_1.page
], reminderPage);
exports.reminderPage = reminderPage;
exports.default = new reminderPage();
//# sourceMappingURL=remindPage.js.map