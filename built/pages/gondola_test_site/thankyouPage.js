"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let thankyouPage = class thankyouPage {
    constructor() {
        this.lnkDownload = "//a[contains(.,'Download Now')]";
        this.txtContent = "div.elementor-element-52b4f2b .elementor-text-editor";
        this.txtThankyou = "//h4[@class='elementor-heading-title elementor-size-default']";
        this.txtTitle = "//strong[.='Please check your email']";
        this.txtAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
        this.lnkContact = "//a[contains(.,'Contact Support.')]";
        this.lnkEmail = "//span[.='gondola@logigear.com']";
        this.lnkInstallGondola = "//a[.='Installing Gondola']";
        this.lnkUnderstandingGondola = "//a[.='Understanding Gondola']";
        this.lnkWhyGondola = "//ul[@id='menu-footer-primary-en']//a[.='Why Gondola?']";
        this.lnkFeature = "//ul[@id='menu-footer-primary-en']//a[.='Features']";
        this.txtEmailAddress = "//input[@id='field_lggtd']";
        this.lnkHeaderWhyGondola = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Why Gondola?']";
        this.lnkHeaderFeatures = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Features']";
        this.lnkHeaderPricing = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Pricing']";
        this.lnkPricing = "//ul[@id='menu-footer-primary-en']//a[.='Pricing']";
        this.lnkHeaderBlog = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='menu-blog']";
        this.lnkHeaderAboutUs = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='About Us']";
        this.lnkContactUs = "//a[.='Contact Us']";
        this.lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
        this.lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
        this.contentMenuItem = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']/ul[@class='dropdown-menu']";
        // Notificationbar dialog
        this.dialogNotificationbar = "//div[@id='notify_active']";
        this.btCloseNotify = "//button[@id='close_notify_active']";
        this.btActiveNotify = "//a[contains(.,'Active account')]";
        this._homePageUrl = "https://stage1.gondolatest.com/en/welcome-2/";
    }
    // Action Open website Gondola https://stage1.gondolatest.com/en/welcome-2/
    async navigateTo() {
        await gondolajs_1.gondola.navigate(this._homePageUrl);
        await gondolajs_1.gondola.maximize();
    }
    // Action Check GUI
    async checkGUI(textheader) {
        await gondolajs_1.gondola.waitForElement(this.lnkDownload, 10);
        await gondolajs_1.gondola.checkControlExist(this.lnkDownload);
        await gondolajs_1.gondola.checkText(this.txtThankyou, textheader);
        await gondolajs_1.gondola.checkControlExist(this.txtTitle);
        await gondolajs_1.gondola.checkControlExist(this.lnkContact);
        await gondolajs_1.gondola.checkControlExist(this.lnkEmail);
        await gondolajs_1.gondola.checkControlExist(this.lnkInstallGondola);
        await gondolajs_1.gondola.checkControlExist(this.lnkUnderstandingGondola);
        await gondolajs_1.gondola.checkControlExist(this.txtEmailAddress);
    }
    async openDownloadPage() {
        await gondolajs_1.gondola.waitForElement(this.lnkDownload, 10);
        await gondolajs_1.gondola.click(this.lnkDownload);
    }
    //Action Click link
    async openLink(link) {
        // await gondola.waitForElement(this.lnk_WhyGondola);    
        // await gondola.click(this.lnk_WhyGondola);
        await gondolajs_1.gondola.waitForElement(link, 10);
        await gondolajs_1.gondola.click(link);
    }
    //Action verify notification bar
    async verifyNotificationBar() {
        await gondolajs_1.gondola.waitForElement(this.dialogNotificationbar, 5);
        await gondolajs_1.gondola.checkControlExist(this.dialogNotificationbar);
    }
    //Action close notification bar
    async closeNotificationBar() {
        await gondolajs_1.gondola.waitForElement(this.dialogNotificationbar, 10);
        await gondolajs_1.gondola.checkControlExist(this.btCloseNotify);
        await gondolajs_1.gondola.click(this.btCloseNotify);
    }
    //Action active notification bar
    async activeNotify() {
        await gondolajs_1.gondola.waitForElement(this.dialogNotificationbar, 10);
        await gondolajs_1.gondola.checkControlExist(this.btActiveNotify);
        await gondolajs_1.gondola.click(this.btActiveNotify);
    }
    //Action check context menu item not existed
    async checkMenuItemExistonAccount(value) {
        await gondolajs_1.gondola.waitForElement(this.lnkHeaderAccount, 10);
        await gondolajs_1.gondola.click(this.lnkHeaderAccount);
        let isMenuExist = (await gondolajs_1.gondola.getText(this.contentMenuItem)).includes(value);
        await gondolajs_1.gondola.checkEqual(isMenuExist, true, "No matches found: " + value);
    }
    //Action check context menu item existed
    async checkMenuItemNoExistonAccount(value) {
        await gondolajs_1.gondola.waitForElement(this.lnkHeaderAccount, 10);
        await gondolajs_1.gondola.click(this.lnkHeaderAccount);
        let isMenuExist = (await gondolajs_1.gondola.getText(this.contentMenuItem)).includes(value);
        await gondolajs_1.gondola.checkEqual(isMenuExist, false, "matches found: " + value);
    }
};
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkDownload", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "txtContent", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "txtThankyou", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "txtTitle", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "txtAccount", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkContact", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkEmail", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkInstallGondola", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkUnderstandingGondola", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkWhyGondola", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkFeature", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "txtEmailAddress", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderWhyGondola", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderFeatures", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderPricing", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderBlog", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderAboutUs", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "lnkHeaderLogIn", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "dialogNotificationbar", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "btCloseNotify", void 0);
__decorate([
    gondolajs_1.locator
], thankyouPage.prototype, "btActiveNotify", void 0);
__decorate([
    gondolajs_1.action("open website Gondola", "Navigate to thank you page")
], thankyouPage.prototype, "navigateTo", null);
__decorate([
    gondolajs_1.action(" check GUI")
], thankyouPage.prototype, "checkGUI", null);
__decorate([
    gondolajs_1.action(" click link")
], thankyouPage.prototype, "openLink", null);
__decorate([
    gondolajs_1.action("verify notification bar")
], thankyouPage.prototype, "verifyNotificationBar", null);
__decorate([
    gondolajs_1.action("close notification bar")
], thankyouPage.prototype, "closeNotificationBar", null);
__decorate([
    gondolajs_1.action("active notification bar")
], thankyouPage.prototype, "activeNotify", null);
__decorate([
    gondolajs_1.action("check context menu item not existed")
], thankyouPage.prototype, "checkMenuItemExistonAccount", null);
__decorate([
    gondolajs_1.action("check context menu item existed")
], thankyouPage.prototype, "checkMenuItemNoExistonAccount", null);
thankyouPage = __decorate([
    gondolajs_1.page
], thankyouPage);
exports.thankyouPage = thankyouPage;
exports.default = new thankyouPage();
//# sourceMappingURL=thankyouPage.js.map