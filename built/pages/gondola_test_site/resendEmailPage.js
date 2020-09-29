"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const datatest_1 = require("../../data/datatest");
let reminderPage = class reminderPage {
    constructor() {
        this.btResendActiveEmail = "//button[@id='btn_sendactive']";
        this.txtEmail = "//input[@id='lg-email']";
        this.lnkActivePAge = "//a[@id='return_active']";
        this.txtMessage = "//div[@id='system_message']";
    }
    async checkGUI() {
        await gondolajs_1.gondola.waitForElement(this.btResendActiveEmail, 10);
        await gondolajs_1.gondola.checkControlExist(this.btResendActiveEmail);
        await gondolajs_1.gondola.checkControlExist(this.txtEmail);
        await gondolajs_1.gondola.checkControlExist(this.lnkActivePAge);
    }
    async checkMaximumNumberResendActive() {
        await gondolajs_1.gondola.enter(this.txtEmail, datatest_1.datatest.username_nonactive);
        let i = 1;
        while (i <= 4) {
            await gondolajs_1.gondola.click(this.btResendActiveEmail);
            //await gondola.checkControlExist(datatest.messageResendEmail);
            //get message
            if (await gondolajs_1.gondola.doesControlExist(this.txtMessage)) {
                await gondolajs_1.gondola.checkText(this.txtMessage, datatest_1.datatest.warningActiveCode);
            }
            else if (i === 4) {
                await gondolajs_1.gondola.checkEqual(false, true, "Message still not appears after retry 3 times");
            }
            i++;
        }
    }
};
__decorate([
    gondolajs_1.locator
], reminderPage.prototype, "btResendActiveEmail", void 0);
__decorate([
    gondolajs_1.locator
], reminderPage.prototype, "txtEmail", void 0);
__decorate([
    gondolajs_1.locator
], reminderPage.prototype, "lnkActivePAge", void 0);
__decorate([
    gondolajs_1.locator
], reminderPage.prototype, "txtMessage", void 0);
reminderPage = __decorate([
    gondolajs_1.page
], reminderPage);
exports.reminderPage = reminderPage;
exports.default = new reminderPage();
//# sourceMappingURL=resendEmailPage.js.map