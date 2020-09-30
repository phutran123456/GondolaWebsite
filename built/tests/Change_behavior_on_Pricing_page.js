"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/newWelcomePage/thankyouPage"));
const datatest_1 = require("../data/datatest");
const pricingPage_1 = __importDefault(require("../pages/gondola_test_site/pricingPage"));
gondolajs_1.TestModule("Change behavior and text of Free Sign Up button on Pricing page");
/**
* Testcase 01: Check GUI displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. check "Free Sign Up" is displayed
*
*/
gondolajs_1.TestCase("Testcase 01: Check GUI Pricing page displayed correctly before login", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
    await pricingPage_1.default.checkGUIbeforeLogin();
});
/**
* Testcase 02: Check Pricing page with login inactive account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 2. login inaccount
* 3. check "Thank you" page is displayed
* 4. check notification bar is displayed
* 5. check thank you page displayed
* 6. click Pricing link on header
* 7. check "Free Download" is displayed on Pricing page
*/
gondolajs_1.TestCase("Testcase 02: Check login inactive account on Pricing page ", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
    await pricingPage_1.default.checkGUIafterLoginInactiveAccount(datatest_1.datatest.username_inactive, datatest_1.datatest.password_inactive);
});
/**
* Testcase 03: Check Pricing page with login active account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3  login active account
* 4. check "Thank you" page is displayed
* 5. click Pricing link on header
* 6. check "Free Download" is displayed
*
*/
gondolajs_1.TestCase("Testcase 03: Check login active account on Pricing page ", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderPricing);
    await pricingPage_1.default.checkGUIafterLoginActiveAccount(datatest_1.datatest.username_active, datatest_1.datatest.password_active);
});
//# sourceMappingURL=Change_behavior_on_Pricing_page.js.map