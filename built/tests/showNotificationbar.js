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
* 2. Click on Pricing link on header
* 3. Login account without active
* 4. Click 'Contact Sale' button on Pricing page
* 5. Verify notification bar displayed in page.
*/
gondolajs_1.TestCase("Testcase 08: Check notification bar displayed correctly when clicking on Contact Us of Pricing page", async () => {
    await thankyouPage_1.default.navigateTo();
    await pricingPage_1.default.openLink(pricingPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.checkGUI(datatest_1.datatest.textheader);
    await thankyouPage_1.default.closeNotificationBar();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
    await thankyouPage_1.default.closeNotificationBar();
    await pricingPage_1.default.openLink(pricingPage_1.default.btContactSale);
    await contactsales_1.default.verifyNotificationBar();
    await contactsales_1.default.closeNotificationBar();
});
//# sourceMappingURL=showNotificationbar.js.map