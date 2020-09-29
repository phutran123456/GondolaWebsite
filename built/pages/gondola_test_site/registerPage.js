"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let registerPage = class registerPage {
    constructor() {
        this.txt_Firstname = "#FreshdeskUser_first_name";
        this.txt_Lastname = "#FreshdeskUser_last_name";
        this.txt_Email = "#FreshdeskUser_email_SG";
        this.txt_Password = "#FreshdeskUser_new_password";
        this.txt_ConfirmPassword = "#FreshdeskUser_new_password_repeat";
        this.bt_Login = "#signup-btn";
        //one last step
        this.txt_Title = "#FreshdeskUser_title";
        this.txt_Company = "#FreshdeskUser_company";
        this.cmb_Country = "//select[@id='country']";
        this.cmb_State = "//select[@id='state']";
        this.txt_Phone = "#FreshdeskUser_phone";
        this.chk_captcha = "//div[@class='recaptcha-checkbox-border']";
        this.bt_Create = "//button[@id='signup-btn']";
    }
    async infoUser(firstname, lastname, email, password, confirmpassword) {
        await gondolajs_1.gondola.waitForElement(this.txt_Firstname);
        await gondolajs_1.gondola.enter(this.txt_Firstname, firstname);
        await gondolajs_1.gondola.enter(this.txt_Lastname, lastname);
        await gondolajs_1.gondola.enter(this.txt_Email, email);
        await gondolajs_1.gondola.enter(this.txt_Password, password);
        await gondolajs_1.gondola.enter(this.txt_ConfirmPassword, password);
        await gondolajs_1.gondola.click(this.bt_Login);
    }
    async onelaststep(title, company, country, state, phone) {
        await gondolajs_1.gondola.waitForElement(this.chk_captcha);
        await gondolajs_1.gondola.enter(this.txt_Title, title);
        await gondolajs_1.gondola.enter(this.txt_Company, company);
        await gondolajs_1.gondola.select(this.cmb_Country, country);
        await gondolajs_1.gondola.select(this.cmb_State, state);
        await gondolajs_1.gondola.enter(this.txt_Phone, phone);
        // await gondola.click(this.chk_captcha);
        await gondolajs_1.gondola.click(this.bt_Create);
    }
};
__decorate([
    gondolajs_1.locator
], registerPage.prototype, "txt_Firstname", void 0);
__decorate([
    gondolajs_1.action(" login account")
], registerPage.prototype, "infoUser", null);
registerPage = __decorate([
    gondolajs_1.page
], registerPage);
exports.registerPage = registerPage;
exports.default = new registerPage();
//# sourceMappingURL=registerPage.js.map