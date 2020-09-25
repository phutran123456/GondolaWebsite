"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let loginPage = class loginPage {
    constructor() {
        this.txt_username = "//input[@id='lg-email']";
        this.txt_password = "//input[@id='lg-password']";
        //public chk_captcha ="//div[@class='recaptcha-checkbox-checkmark']";
        this.bt_Login = "//button[@id='login-btn']";
    }
    async login(username, password) {
        await gondolajs_1.gondola.waitForElement(this.txt_username, 30);
        await gondolajs_1.gondola.enter(this.txt_username, username);
        await gondolajs_1.gondola.enter(this.txt_password, password);
        // await gondola.click(this.chk_captcha);
        await gondolajs_1.gondola.click(this.bt_Login);
    }
};
__decorate([
    gondolajs_1.locator
], loginPage.prototype, "txt_username", void 0);
__decorate([
    gondolajs_1.action(" login account")
], loginPage.prototype, "login", null);
loginPage = __decorate([
    gondolajs_1.page
], loginPage);
exports.loginPage = loginPage;
exports.default = new loginPage();
//# sourceMappingURL=loginPage.js.map