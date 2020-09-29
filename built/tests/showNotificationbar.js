"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const loginPage_1 = __importDefault(require("../pages/gondola_test_site/loginPage"));
const datatest_1 = require("../data/datatest");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/thankyouPage"));
const pricingPage_1 = __importDefault(require("../pages/gondola_test_site/pricingPage"));
const contactsales_1 = __importDefault(require("../pages/gondola_test_site/contactsales"));
gondolajs_1.TestModule("Check notification bar displayed after logging in without activite account");
/**
* Testcase: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'why gondola?' on header
* 4. Verify notification bar displayed in page.
* 5. Click 'Features' on header
* 6. Verify notification bar displayed in page.
* 7. Click 'Blog' on header
* 8. Verify notification bar displayed in page.
* 9. Click 'About Us' on header
* 10. Verify notification bar displayed in page.
* 11. Click 'Download' button
* 12. Verify notification bar displayed in page.
* 13. Click 'Pricing' link
* 14. Verify notification bar displayed in page.
* 15. Click 'Contact Us' link
* 16. Verify notification bar displayed in page.
*/
gondolajs_1.TestCase("Testcase 01: Check notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderWhyGondola);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 02: Check notification bar displayed correctly when clicking on link 'Features'", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderFeatures);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 03: Check notification bar displayed correctly when clicking on link 'Blog'", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderBlog);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 04: Check notification bar displayed correctly when clicking on link 'About us'", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderAboutUs);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 05: Check notification bar displayed correctly when clicking on Download", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkDownload);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 06: Check notification bar displayed correctly when clicking on Pricing", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkPricing);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
gondolajs_1.TestCase("Testcase 07: Check notification bar displayed correctly when clicking on Contact Us", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkContactUs);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
/**
* Testcase: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Click on Pricing link on header
* 3. Login inactive account
* 4. Click 'Contact Sale' button on Pricing page
* 5. Verify notification bar displayed in page.
*/
gondolajs_1.TestCase("Testcase 08: Check notification bar displayed correctly when clicking on Contact Us of Pricing page", async () => {
    await thankyouPage_1.default.navigateTo();
    await pricingPage_1.default.openLink(pricingPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.checkGUI();
    await thankyouPage_1.default.closeNotificationBar();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
    await thankyouPage_1.default.closeNotificationBar();
    await pricingPage_1.default.openLink(pricingPage_1.default.btContactSale);
    await contactsales_1.default.verifyNotificationBar();
    await contactsales_1.default.closeNotificationBar();
});
//# sourceMappingURL=showNotificationbar.js.map